const Sequelize = require('sequelize');
const db = require('../database');
const Category = require('./Category');
const Method = require('./Method');
const Ingredient = require('./Ingredient');

const Model = Sequelize.Model;

class Drink extends Model { }
Drink.init({
    name: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Drink name is required"
            }
        }
    },
    glass: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Glass is required"
            }
        }
    },
    garnish: {
        type: Sequelize.STRING,
        allowNull: true,
    }, 
}, 
{
    sequelize: db,
    modelName: 'drink',
    timestamps: false
});

Drink.hasMany(Ingredient, { foreignKey: 'drink_id' });
Drink.belongsTo(Method, {foreignKey: 'method_id'});
Drink.belongsTo(Category, {foreignKey: 'category_id'});
Ingredient.belongsTo(Drink, {foreignKey:'drink_id'});
Category.hasMany(Drink, { foreignKey: 'category_id' });
Method.hasMany(Drink, { foreignKey: 'method_id' });

module.exports = Drink;