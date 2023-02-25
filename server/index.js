import express from "express";
import router from "./routes/index.js";
import database from "./database.js";
import {config} from "dotenv";

config();

const app = express();
app.use(express.json());
app.use(router);

database.authenticate()
    .then(() => console.log('database authenticated successfully'))
    .catch(e => console.log(e));

export default app;
