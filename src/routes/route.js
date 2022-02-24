const express = require('express');
const router = express.Router();

//part 1

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/movies',function(req,res){
    const movie = ['Shutter Island','Titanic','Django Unchained','Revenant']
     res.send(movie);



})
//part 2
router.get('/movies/:index',function(req,res){


const movie = ['Shutter Island','Titanic','Django Unchained','Revenant']
let mn =req.params.index;
if(mn>movie.length-1){
    res.send('Use valid index')
}
else if(mn<movie.length){

    let x = movie[mn]
    res.send(x)
}


})
 
//part 3

router.get('/films', function(req,res){

const film = [

    {
        "id":1, "name":"Shutter Island"
    },
   
    {
        "id":2, "name":"Titanic"   
     },

     {
         "id":3, "name":"Django Unchained"


     },

     {
        
        "id":4 , "name":"revenant"

     }


]
res.send(film)

})

// part 4
router.get('/films/:filmsid', function(req,res){
      

    let fi=req.params.filmsid;
    const film = [
    
        {
            "id":1, "name":"Shutter Island"
        },
       
        {
            "id":2, "name":"Titanic"   
         },
    
         {
             "id":3, "name":"Django Unchained"
    
    
         },
    
         {
            
            "id":4 , "name":"revenant"
    
         }
    
    
    ]

   
        for(let i=0;i<film.length;i++){
            if(film[i].id==fi){

                res.send(film[i])
            }

        }
        res.send("invalid id")
    
   
   
   
   
    
    })




module.exports = router;
