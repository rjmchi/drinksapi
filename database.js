const Sequelize = require('sequelize');
const dbConnection = new Sequelize({
    dialect: 'sqlite',
    storage: 'drinks.db',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }    
});
module.exports = dbConnection;