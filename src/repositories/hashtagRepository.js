import db from "../database/postgres.js";

function getTrendingHashtags(){
    return db.query(`
        SELECT name AS hashtag, COUNT(name) AS "appearanceTimes"
        FROM hashtags
        GROUP BY name
        ORDER BY "appearanceTimes" DESC
        LIMIT 10`
    );
}

function getHashtagPosts(){
    return db.query(`
    `);
}

export {
    getTrendingHashtags
};