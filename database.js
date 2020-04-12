const Sequelize = require('sequelize');
const dbConnection = new Sequelize('drinks', 'root', 'kether1330', {
    host: 'localhost',
    dialect: 'mysql',
});
module.exports = dbConnection;