import db from "../database/postgres.js";

async function getHashtagByName(hashtagName){
    return db.query(`
        SELECT * FROM hashtags
        WHERE name = ($1)`,
        [hashtagName]
    );
}

async function getTrendingHashtags(){
    return db.query(`
        SELECT  name AS hashtag, 
                COUNT("hashtagId") AS mentions
        FROM "postsHashtags"
        JOIN hashtags ON hashtags.id = "postsHashtags"."hashtagId"
        GROUP BY name, 
                "hashtagId"
        ORDER BY mentions DESC
        LIMIT 10;`
    );
}

async function getHashtagPosts(hashtagName){
    return db.query(`
        SELECT  name AS hashtag,
                posts.id AS "postId",
                users."userName", 
                users."pictureUrl" AS "userImage",
                posts.content AS "postDescription",
                posts.url AS "postUrl",
                COUNT(likes."postId") AS "likesCount"
        FROM "postsHashtags"
        JOIN hashtags ON hashtags.id = "postsHashtags"."hashtagId"
        JOIN posts ON posts.id = "postsHashtags"."postId"
        JOIN users ON users.id = posts."userId"
        LEFT JOIN likes ON likes."postId" = posts.id
        WHERE hashtags.name = ($1)
        GROUP BY    hashtags.name, 
                    posts.id,
                    users."userName", 
                    users."pictureUrl", 
                    posts.content, 
                    posts.url, 
                    posts."createdAt"
        ORDER BY posts."createdAt" DESC
        LIMIT 20;`,
        [hashtagName]
    );
}

async function insertHashtag(hashtagName){
    return db.query(`
        INSERT INTO hashtags (name)
        VALUES ($1) RETURNING id`,
        [hashtagName]
    );
}

async function insertPostsHashtags(postId, hashtagId){
    return db.query(`
        INSERT INTO "postsHashtags" ("postId", "hashtagId")
        VALUES ($1, $2);`,
        [postId, hashtagId]
    );
}

export {
    getHashtagByName,
    getTrendingHashtags,
    getHashtagPosts,
    insertHashtag,
    insertPostsHashtags
};