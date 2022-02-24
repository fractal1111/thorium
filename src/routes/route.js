
const express = require('express');
const router = express.Router();


let persons= [
     {
     name: "PK",
     age: 10,
     votingStatus: false
 },
 {
     name: "SK",
     age: 20,
     votingStatus: false
 },
 {
     name: "AA",
     age: 70,
     votingStatus: false
 },
 {
     name: "SC",
     age: 5,
     votingStatus: false
 },
 {
     name: "HO",
     age: 40,
     votingStatus: false
 }
 ]





router.post("/qpi", function (req, res) {
    let votingAge = req.query.votingAge
    
    for(let i=0;i<persons.length;i++){
        if(votingAge<persons[i].age){

            persons[i].votingStatus = true
            
            
        }
    }
   let x = persons.filter(ele=>ele.votingStatus)
   console.log(x)
    return res.send(x)
     
    
   
})




module.exports = router;


