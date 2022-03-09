const jwt = require("jsonwebtoken");

const tokenChecker = function(req,res,next){


    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Token missing")
    }

    try{let decodedToken = jwt.verify(token, "functionup-thorium")
}  
    catch (err){return res.send("Invalid Token")}

next()

}


module.exports.tokenChecker=tokenChecker;
