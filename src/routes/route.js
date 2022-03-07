const express = require('express');
const router = express.Router();
const m = require("../middleware/middleware")

const allController= require("../controllers/allConrollers")


router.get("/test1", m.mid1 , allController.a)
router.get("/test2", m.mid1, allController.b)
router.get("/test3",m.mid1, allController.c)
router.get("/test4",m.mid1, allController.d)


module.exports = router;