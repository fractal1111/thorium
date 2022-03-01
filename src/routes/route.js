const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")






router.post("/createBook", BookController.createBook  )

router.get("/booksList", BookController.booksList)

router.get("/booksInYear" , BookController.getBooksInYear)

router.get("/getParticularBook" , BookController.getParticularBook)

router.get("/getRandomBooks" , BookController.getRandomBooks)

router.get("/indian", BookController.getIXINRBooks)

module.exports = router;