import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const server = express();

server.use(cors(), express.json());

const PORT = 5000 || process.env.PORT;

server.listen(PORT, console.log(`Server running successfully at PORT ${PORT}.`))