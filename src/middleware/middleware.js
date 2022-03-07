const headCheck = function (req,res,next){
let header = req.headers.isfreeappuser

if(!header){
    res.send("Request is Missing A Mandatory Header")}
else{ next()}

}


module.exports.headCheck=headCheck