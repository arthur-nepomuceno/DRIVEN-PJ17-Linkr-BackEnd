import db from "../database/postgres.js";

function getHashtagByName(hashtagName){

    hashtagName = "#" + hashtagName;

    return db.query(`
        SELECT * FROM hashtags
        WHERE name = ($1)`,
        [hashtagName]
    );
}

function getTrendingHashtags(){
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

function getHashtagPosts(hashtagName){

    hashtagName = "#" + hashtagName;

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

export {
    getHashtagByName,
    getTrendingHashtags,
    getHashtagPosts
};