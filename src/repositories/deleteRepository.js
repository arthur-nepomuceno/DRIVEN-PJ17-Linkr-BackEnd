import db from "../database/postgres.js";

export function deletePostById(id){
    return db.query('DELETE FROM posts WHERE id = $1', [id])
}


export function deletePostsHashtagsById(id){
    return db.query('DELETE FROM "postsHashtags" WHERE id = $1', [id])
}

