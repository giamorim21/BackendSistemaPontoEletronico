// Configurações do banco de dados
const { Sequelize } = require('sequelize');

// database | user | password | options {host | dialect}
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.BD_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

module.exports = sequelize;