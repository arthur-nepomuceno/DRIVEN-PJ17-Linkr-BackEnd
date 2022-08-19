import db from "../database/postgres.js";

export async function addnewComment(userId, postId, comment) {

    return db.query('INSERT INTO comments ("userId","postId", comment) VALUES ($1, $2, $3) RETURNING id', [userId, postId, comment]
    );
}

export async function getPostCommentbyId(postId) {

    return db.query(`SELECT "comments"."postId" AS postId, 
                        users."userName" AS userName, 
                        users."pictureUrl" AS userImage, 
                        users."id" AS userId, 
                        "comments".comment AS comment
                        FROM "comments"
                        JOIN users
                        ON users.id = "comments"."userId"
                        WHERE "comments"."postId" = ($1)
                        ORDER BY "comments"."postId" DESC;`, [postId]
    );
}
