const express = require('express');
const router = express.Router();
const m = require("../middleware/middleware")

const allController= require("../controllers/allControllers")





router.post("/createUser",m.headCheck, allController.createUser  )
router.post("/createProduct", allController.createProduct)
router.post("/createOrder", m.headCheck , allController.createOrder)



module.exports = router;