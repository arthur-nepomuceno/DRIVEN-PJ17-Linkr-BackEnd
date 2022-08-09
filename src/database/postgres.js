import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const connection = {
    connectionString: process.env.DATABASE_URL
};

if(process.env.MODE === 'PROD'){
    connection.ssl = {
        rejectUnauthorized: false
    }
}

const db = new Pool(connection);
export default db;