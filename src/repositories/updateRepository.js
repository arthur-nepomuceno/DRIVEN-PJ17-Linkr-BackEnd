import db from "../database/postgres.js";

export function updatePostById(content, id){
    return db.query('UPDATE posts SET content = $1 WHERE id = $2', [content, id])
}
