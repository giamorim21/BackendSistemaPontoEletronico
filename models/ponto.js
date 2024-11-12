const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

//Definir o modelo PONTO
const Ponto = sequelize.define('Ponto', {
        id_ponto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.ENUM('entrada', 'saida', 'intervalo', 'volta do intervalo'),
            allowNull: false
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        anexo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        passado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }, 
        dataHora: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
        localizacao: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Ponto;