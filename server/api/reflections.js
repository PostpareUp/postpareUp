'use strict';

const Reflection = require('../db/models/Reflection');
const router = require('express').Router();

//get all reflections
router.get('/', async (req, res, next) => {
  try {
    const reflections = await Reflection.findAll();
    res.json(reflections);
  } catch (err) {
    next(err);
  }
});

//get all reflections from one user
router.get('/user/:userId', async (req, res, next) => {
  try {
    const reflections = await Reflection.findAll({
      where: {
        userId: req.params.userId,
      }
    });
    res.json(reflections);
  } catch (err) {
    next(err);
  }
});

//get single reflection
router.get('/:id', async (req, res, next) => {
  try {
    const reflection = await Reflection.findById(req.params.id);
    res.json(reflection);
  } catch (err) {
    next(err);
  }
});

//create a new reflection
router.post('/create', async (req, res, next) => {
  try {
    const {companyName, interviewStage, reflection, note} = req.body;
    const newReflection = await Reflection.create({
      companyName,
      interviewStage,
      reflection,
      note
    })
    res.json(newReflection)
  } catch (err) {
    next(err)
  }
})

//update a reflection
router.put('/:id', async (req, res, next) => {
  try {
    const { companyName, interviewStage, reflection, note } = req.body;

    const foundReflection = await Reflection.findById(req.params.id)
    await foundReflection.update({
      companyName,
      interviewStage,
      reflection,
      note
    });
    res.send('update successful')
//redirect from front end to single reflection or all user's reflections?
  } catch (err) {
    next(err)
  }
})


module.exports = router;
