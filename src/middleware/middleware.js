
const mid1= function(req,res,next){
    let time= new Date()
    let ip =req.socket.remoteAddress
    let route= req.originalUrl
    console.log ( time , ip , route)

}
 
module.exports.mid1=mid1;