const Sequelize = require('sequelize');
const db = require('../database');
const Drink = require('./Drink');

const Model = Sequelize.Model;

class Ingredient extends Model {}
Ingredient.init({
    // attributes
    additional: {
        type: Sequelize.STRING,
	allowNull: true
    },
    amount: {
        type: Sequelize.STRING,
	allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
        modelName: 'ingredient',
    // options
    timestamps: false
});

module.exports = Ingredient;