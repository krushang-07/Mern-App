const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("hello fromrouter js");
});
router.post("/register", (req, res) => {
    const { name, email, phone, password, work, cpassword } = req.body;
    
  if (!name || !email || !phone || !password || !work || !cpassword) {
    return res.status(422).json({ error: "plz filled the filed properly" });
  }

  //   User.findOne({ email: email })
  //     .then((userExist) => {
  //       if (userExist) {
  //         return res.status(422).json({ error: "email alreaddy exist" });
  //       }
  //     })

  //     .catch((err) => {
  //       res.status(500).json({ error: "failed to registred" });
  //     });

  const user = new User({
    name,
    email,
    phone,
    password,
    work,
    cpassword,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ message: "user registration successfully" });
    })
    .catch((err) => {
      res.json({ error: "error in coonection or registration" });
    });
});

module.exports = router;
