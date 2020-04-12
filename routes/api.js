const express = require('express');
const router = express.Router();
const Drinks = require('../models/Drink');
const Categories = require('../models/Category');
const Ingredients = require('../models/Ingredient');
const Methods = require('../models/Method');

router.get('/', async (req, res) => {
    // var drinks = await Drinks.findAll();
    // res.status(200).send (drinks);

   var cats = await Categories.findAll({
       include:[{
           model:Drinks, include:[Methods, Ingredients]
       }]
   });
   res.status(200).send (cats);
});
module.exports = router;
