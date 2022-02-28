const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")



router.post("/addbook", UserController.createBook )

router.get("/library", UserController.getLibrary)

module.exports = router;