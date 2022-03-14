let axios = require("axios")

let weatherOfLondon = async function(req,res){
try{
    let options = {
            
        method : "get",
        url : ` http://api.openweathermap.org/data/2.5/weather?q=London&appid=cf058540a7b582feacd27d9ce8f70d02`
 }

 let result = await axios(options)
 res.status(200).send({msg:"London",weather : result.data})
}
 catch(err){
     res.status(500).send({ERROR:err.message})
 }

}

//part 2 temp only
let tempOfLondon = async function(req,res){
    try{
        let options = {
                
            method : "get",
            url : ` http://api.openweathermap.org/data/2.5/weather?q=London&appid=cf058540a7b582feacd27d9ce8f70d02`
     }
    
     let result = await axios(options)
     res.status(200).send({msg:"London",presentTemp: result.data.main.temp})
    }
     catch(err){
         res.status(500).send({ERROR:err.message})
     }
    
    }

    //part 3 sorted temp of given cities in ascending order


    let multipleTemp = async function(req,res){

    try{
        let arr =  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        
      let  tempArr=[]
        for (let i=0 ; i<arr.length ;i++){
            
            let cityTemp = {city:arr[i]};
            let options = {
            
                method : "get",
                url : ` http://api.openweathermap.org/data/2.5/weather?q=${arr[i]}&appid=cf058540a7b582feacd27d9ce8f70d02`
         }
            
         let result = await axios(options)
         cityTemp.temp=result.data.main.temp
        
         tempArr.push(cityTemp)
        
        }

       

        console.log(tempArr)
    

        let sortedTempArray = tempArr.sort(({temp:a},{temp:b})=> a-b)
        res.status(200).send ({msg:sortedTempArray})


    }
    catch(err){res.status(500).send({ERROR:err.messsage})}

    }





















module.exports.weatherOfLondon=weatherOfLondon;
module.exports.tempOfLondon=tempOfLondon;
module.exports.multipleTemp=multipleTemp;

















