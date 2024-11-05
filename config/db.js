// Configurações do banco de dados
const { Sequelize } = require('sequelize');

// database | user | password | options {host | dialect}
const sequelize = new Sequelize('ponto', 'postgres', 'ceub123456', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;