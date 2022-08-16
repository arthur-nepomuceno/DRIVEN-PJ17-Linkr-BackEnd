import db from "../database/postgres.js";


export function newPublish(post){

 const {userId, url, content} = post;
    return db.query('INSERT INTO posts ("userId", content, url) VALUES ($1, $2, $3) RETURNING id', [userId, content, url])
}
