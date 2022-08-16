import db from "../database/postgres.js";

export async function addnewComment(userId, postId, comment){
    
    return db.query('INSERT INTO comments ("userId","postId", comment) VALUES ($1, $2, $3) RETURNING id', [userId, postId, comment]
    );
}
