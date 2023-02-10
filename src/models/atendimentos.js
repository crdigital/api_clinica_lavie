const { DataTypes } = require('sequelize');

const database = require('../services/database');

const Atendimentos = database.define(
    "Atendimentos",{
        paciente_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        psicologo_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        data_atendimento:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        observacao:{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        tableName: "atendimentos",
        underscored: true,
        timestamps: false,
    }
);

module.exports = Atendimentos;