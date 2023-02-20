import express from "express";
import {Router} from "express";
import {Sequelize, DataTypes} from "sequelize";

const app = express();
const router = Router();
const db = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: '3306',
    username: "root",
    database: "costify_db",
    password: "karma&koma1613",
    logging: false,
});
const userModel = db.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        login: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
        tableName: 'users',
        timestamps: false,
    });


router.get('/test', (req, res) => {
    res.status(200).json('Ответ от сервера');
});
router.get('/users', (req, res) => {
    userModel.findAll().then(user => {
        res.status(200).json(user);
    })
});

app.use(router);

db.authenticate()
    .then(() => console.log('database authenticated successfully'))
    .catch(e => console.log(e));

export default app;
