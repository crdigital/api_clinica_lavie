const { DataTypes } = require('sequelize');

const database = require('../services/database');

const Psicologos = database.define(
    "Psicologos",{
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        senha:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        apresentacao:{
            type:DataTypes.TEXT,
            allowNull: false,
        }
    },{
        tableName:"psicologos",
        timestamps: false,
    });

module.exports = Psicologos;    