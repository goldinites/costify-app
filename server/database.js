import {Sequelize} from "sequelize";

export default new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: '3306',
    username: "root",
    database: "costify_db",
    password: "karma&koma1613",
    logging: false,
});
