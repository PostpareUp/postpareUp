"use strict";

const User = require("../db/models/User");
const Reflection = require('../db/models/Reflection');
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { username, imageUrl, email, password } = req.body;
    const newUser = await User.create({
      username,
      imageUrl,
      email,
      password,
    });
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { username, imageUrl, email, password } = req.body;
    let foundUser = await User.findById(req.params.id);
    foundUser = await foundUser.update({
      username,
      imageUrl,
      email,
      password,
    });
    res.json(foundUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      },
      includes: {
        model: Reflection
      }
    });


    res.send("Your account and your reflections has been deleted");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
