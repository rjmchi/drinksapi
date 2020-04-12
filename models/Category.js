const Sequelize = require('sequelize');
const db = require('../database');
const Drink = require('./Drink');

const Model = Sequelize.Model;

class Category extends Model { }
Category.init({
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    modelName: 'category',
    // options
    timestamps: false
});

module.exports = Category;