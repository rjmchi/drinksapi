const Sequelize = require('sequelize');
const db = require('../database');
const Drink = require('./Drink');

const Model = Sequelize.Model;

class Method extends Model { }
Method.init({
    // attributes
    method: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    modelName: 'method',
    // options
    timestamps: false
});

module.exports = Method;