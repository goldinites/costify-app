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
        date: DataTypes.STRING,
        monthCreate: DataTypes.INTEGER,
        yearCreate: DataTypes.INTEGER
    },
    {
        tableName: 'costs',
        timestamps: false,
    });
