const express = require('express');
const router = express.Router();
const x = require("../controllers/allControllers")

router.post("/createBook" , x.createBook)
router.post("/createAuthor", x.createAuthor)
router.get("/cbBooklist" , x.cbBoookList)
router.get("/updatedPrice", x.updatedBookPrice)
router.get("/availableBooks",x.books)


module.exports = router;