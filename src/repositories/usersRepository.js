import db from "../database/postgres.js";

function getUserByEmail(email){

  return  db.query('SELECT * FROM users WHERE email = $1 ', [email]);
  
}

export {
  getUserByEmail,
};