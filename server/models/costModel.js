import {DataTypes} from "sequelize";
import database from "../database.js";

export default database.define('Cost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        value: DataTypes.STRING,
        date: DataTypes.DATE
    },
    {
        tableName: 'costs',
        timestamps: false,
    });
