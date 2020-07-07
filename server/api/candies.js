'use strict'

const Candy = require('../db/models/Candy');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  }
  catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id);
    res.json(candy);
  }
  catch (err) {
    next(err);
  }
});

router.put('/:id/increase', async (req, res, next) => {
  try {
    let candy = await Candy.findById(req.params.id);
    candy.quantity++;
    await candy.save();
    res.json(candy);
  }
  catch (err) {
    next(err);
  }
});

router.put('/:id/decrease', async (req, res, next) => {
  try {
    let candy = await Candy.findById(req.params.id);
    candy.quantity--;
    await candy.save();
    res.json(candy);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
