const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")






router.post("/createBook", BookController.createBook  )

router.get("/booksList", BookController.booksList)

router.get("/booksInYear/:year" , BookController.getBooksInYear)

router.get("/getParticularBook/:authorName/:year/:pages/:price" , BookController.getParticularBook)

router.get("/getRandomBooks" , BookController.getRandomBooks)

router.get("/ndian", BookController.getIXINRBooks)

module.exports = router;