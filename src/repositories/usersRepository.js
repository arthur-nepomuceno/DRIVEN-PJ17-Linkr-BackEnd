import db from "../database/postgres.js";

function getUserByEmail(email){
    return db.query('SELECT id, email, password, "userName", "pictureUrl" FROM users WHERE email = $1', [email]);
}

function getUserByUserName(userName){
    return db.query('SELECT "userName" FROM users WHERE "userName" = $1', [userName]);
}

function createUser(user){
    const {email, password, userName, pictureUrl} = user;
    return db.query('INSERT INTO users (email, password, "userName", "pictureUrl") VALUES ($1, $2, $3, $4)', [email, password, userName, pictureUrl])
}

async function searchUsers(searchTerm) {
    console.log('repo')
    try {
        return await db.query('SELECT "userName", "pictureUrl" FROM users WHERE "userName" ILIKE $1',[`%${searchTerm}%`])
    } catch (error) {
        console.log(error)
    }
}
export {
    getUserByEmail,
    getUserByUserName,
    createUser,
    searchUsers
};