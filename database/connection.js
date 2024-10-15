const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'root', '@Yan2004', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;