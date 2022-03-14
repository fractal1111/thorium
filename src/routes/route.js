const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherControllers")
const MemesController =require("../controllers/memeController")






router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)


//part 1
router.get("/cowin/slots", CowinController.getByDistrict)

//part 2


router.get("/getWeather", WeatherController.weatherOfLondon)
router.get("/getTemp", WeatherController.tempOfLondon)
router.get("/multipleCities",WeatherController.multipleTemp)

//part 4 
router.post("/memes",MemesController.memesController)


module.exports = router;