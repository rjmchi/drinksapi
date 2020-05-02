const express = require('express');
const router = express.Router();
const Drinks = require('../models/Drink');
const Categories = require('../models/Category');
const Ingredients = require('../models/Ingredient');
const Methods = require('../models/Method');

router.get('/category', async (req, res) => {
    var cats = await Categories.findAll({
        order: [['name']]
    });
    res.status(200).send(cats);
});

router.get('/', async (req, res) => {
   var cats = await Categories.findAll({
       include:[{
           model:Drinks, include:[Methods, Ingredients], order:[[Ingredients, 'id'],]
       }], order:[['name'], [Drinks, 'name']]
   });
   res.status(200).send (cats);
});

router.get('/:id', async(req, res) => {
    var drink = await Drinks.findByPk(req.params.id, {
        include:[Categories,Methods, Ingredients]
    });
    res.send(drink);
});

router.get('/category/:id', async(req,res) => {
    var cat = await Categories.findByPk(req.params.id,{
        include: [{
            model: Drinks, include: [Methods, Ingredients], order: [[Ingredients, 'id'],]
        }], order: [[Drinks, 'name']]
    });
    let cats = [];
    cats.push(cat);
    res.status(200).send(cats);
});

module.exports = router;
