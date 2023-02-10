const { DataTypes } = require('sequelize');

const database = require('../services/database');

const Pacientes = database.define(
    "Pacientes",{
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        data_nascimento:{
            type: DataTypes.DATE,
            allowNull:false,
        }
    },{
        tableName:"pacientes",
        timestamps: false,
    });

module.exports = Pacientes;    