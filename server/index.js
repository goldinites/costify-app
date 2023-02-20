import express from "express";
import router from "./routes/index.js";
import database from "./database.js";
import {config} from "dotenv";

config();

// console.log(process.env.DATABASE_PASSWORD)
// console.log(process.env.SECTET_KEY)

const app = express();
app.use(router);

database.authenticate()
    .then(() => console.log('database authenticated successfully'))
    .catch(e => console.log(e));

export default app;
