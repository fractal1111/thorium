const express = require('express');
const router = express.Router();

const allController= require("../controllers/allConrollers")


router.post("/createauthor", allController.createAuthor)
router.post("/createPublisher",allController.createPublisher)
router.post("/createBook", allController.createBook)
router.get("/allBooks", allController.allBooks)
router.put("/updatedBooks", allController.updatedBooks)

module.exports = router;