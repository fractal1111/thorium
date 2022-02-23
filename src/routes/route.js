const express = require('express');
const router = express.Router();

let players = [ 
            {
                  
                 "name": "manish",
                 "dob": "1/1/1995",
                 "gender":"male",
                 "city": "jalandhar",
                 "sports": [ " swimming"],
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
            "city": "jalandhar",
            "sports": [ " swimming"],
            "bookings": [   ]

         },

          {

            "name": "ramu",
            "dob": "1/2/1999",
            "gender":"male",
            "city": "jalandhar",
            "sports": [ " swimming"],
            "bookings": [  ]




          }

        ]

        let a = players.length;

// Part 1 ==> Add new player.

router.post('/player',function(req,res){
    
    let ele = req.body.nplayer.name;
    let ele1 = req.body.nplayer
    for (let i=0;i<a;i++){
        if(ele === players[i].name ){
            console.log(ele)
            res.send("player already exists")
            
           
        }
       else if (i === a){

            players.push(ele1)
            console.log(ele1)
            res.send({data :players , status : true})
           
        }
      
    }
   
     



})

// part 2 (incompelete)


router.post('/player/:playerName/booking/:bookingId'), function (req,res){

    let bi = req.params.bookingId;
    let bkid = req.body.book.bookingId;
    let pn = req.params.playerName;
    let x = req.body.book
     
    for(let i=0;i<a;i++){

        if(pn==players[i].name){
             
           for(let j=0;j<booking[i].length;j++){
               if (bkid==booking[i].bookingNumber){
                   res.send("bookin invalid")
               }
               else{
                   booking[i].push(x)
                   res.send()

               }


           }

           
        }

        else{
            res.send("player does not exist")
        }






    }












}






module.exports = router;
