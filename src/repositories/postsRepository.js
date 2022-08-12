import db from "../database/postgres.js";

function getPosts(){
    const query= `SELECT "userName", "pictureUrl", content, url FROM posts JOIN users ON users.id = posts."userId";`
    return db.query(query);
}

export { getPosts }