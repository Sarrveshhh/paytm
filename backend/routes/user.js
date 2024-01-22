const express = require("express");
const router = express.Router();
const { z } = require("zod");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

signupLogic = async (req, res) => {
  const userDetails = req.body;

  const exisitingUser = await User.findOne({
    username: userDetails.username,
  });

  if (exisitingUser) {
    res.status(411).json({
      msg: "User already exisit, try sign-in or use another username!",
    });
  } else {
    const user = await User.create({
      username: userDetails.username,
      password: userDetails.password,
      fname: userDetails.fname,
      lname: userDetails.lname,
      email: userDetails.email,
    });

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, process.env.JWT_TOKEN);

    res.status(401).json({ msg: "User created!!", token: token});
  }
};

signinLogic = async (req, res) => {
  const userDetails = req.body;

  const exisitingUser = await User.findOne({
    username: userDetails.username,
  });

  if (exisitingUser) {
    if (
      exisitingUser.username === userDetails.username &&
      exisitingUser.password === userDetails.password
    ) {
      const token = jwt.sign({ userId: exisitingUser._id}, process.env.JWT_TOKEN);

      res.status(200).json({ msg: "Welcome back!", token: token });
    } else {
      res.status(411).json({ msg: "Credentials invalid, Check it again!" });
    }
  } else {
    res
      .status(411)
      .json({
        msg: "Username not found! Check your username again or signup!",
      });
  }
};

router.post("/signup", signupLogic);
router.post("/signin", signinLogic);

module.exports = router;
