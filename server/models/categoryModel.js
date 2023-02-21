import {DataTypes} from "sequelize";
import database from "../database.js";

export default database.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        color: DataTypes.STRING
    },
    {
        tableName: 'categories',
        timestamps: false,
    });
