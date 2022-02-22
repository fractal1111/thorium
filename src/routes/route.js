
let obj = require('../logger/logger')
let obj1= require('../util/helper')
const express = require('express');
const _ = require('lodash')
const router = express.Router();


router.get('/test-me', function (req, res) {
    
    obj.y('hello');
    console.log(obj.x);
    obj.z();
    obj1.cdate();
    obj1.cmonth();
    obj1.binfo()

    
    res.send('My first ever api!')
   
});

router.get('/hello',function (req,res){
     
    const mn= ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
   let chunk= _.chunk(mn,[size=3]);
   
    
    const oddn= [1,3,5,7,9,11,13,15,17,19]
   let tail= _.tail(oddn);

   let merged = _.union([2,1,2],[1,1,2],[3,14,1],[22,33,44],[32,22,1])
   let finalMerged = _.uniq(merged);
   
   const musicGods = _.fromPairs([['HipHop','Kendrick Lamar'],['Rock','Led Zeplin'],['Edm','Avicii']]);



   console.log(chunk);
   console.log(tail);
   console.log(finalMerged);
   console.log(musicGods);





    res.send('loadash workings')
})

module.exports = router;
