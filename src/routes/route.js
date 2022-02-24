const express = require('express');
const router = express.Router();

let players = [ 
    {
          
         "name":"Manish",
         "dob": "11/08/1995",
         "gender":"male",
         "city": "Jalandhar",
         "sports": [ " Badminton"],
         "bookings": [

            {
                "bookingNumber":1,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "12345",
                "bookedOn":"31/08/2021",
                "bookedFor":" 01/09/2021"
            },
            {
                "bookingNumber":2,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "123456",
                "bookedOn":"31/08/2021",
                "bookedFor":" 03/09/2021"
            }

         ]
  },
 
 
  {
    "name": "Rajnish",
    "dob": "1/3/1998",
    "gender":"male",
    "city": "Delhi",
    "sports": [ " Football"],
    "bookings": [   ]

 },

  {

    "name": "Sakshi",
    "dob": "1/2/1999",
    "gender":"female",
    "city": "Mumbai",
    "sports": [ " Cricket"],
    "bookings": [  ]




  }

]



// Part 1 ==> Add new player.

router.post('/player',function(req,res){


let np =req.body.nplayer;

for(let i=0;i<players.length;i++){
if(np.name==players[i].name){
    return res.send("player already exists")
}
}
players.push(np);
return res.send(players);

})

// Part 2 ===> booking

router.post('/players/:playerName/bookings/:bookingid',function(req,res){
let playerName = req.params.playerName;
let bookingId = req.params.bookingid;
let booking = req.body;
let bn = req.body.bookingNumber;


for(let i=0;i<players.length;i++){

if(playerName==players[i].name){
    console.log(playerName==players[i].name)

    
     let x=  players[i].bookings.find(ele=>ele.bookingNumber==bookingId)
     let y=  players[i].bookings.find(ele=>ele.bookingNumber==bn)
     
     if ( x||y ){
        return res.send("Booking id already exists")

     }
        players[i].bookings.push(booking)
        return res.send(players)
    }
}



return res.send("Player does not exist")

})








module.exports= router;

