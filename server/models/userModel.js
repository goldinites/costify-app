import {DataTypes} from "sequelize";
import database from "../database.js";

export default database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        tableName: 'users',
        timestamps: false,
    });
