const jwt = require("jsonwebtoken");

const tokenChecker = function(req,res,next){


    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Token missing")
    };

   
   try{ 
        let decodedToken = jwt.verify(token ,"functionup-thorium" )
    if(decodedToken){
        if(decodedToken.userId===req.params.userId){
            next()
        }
        else
        {return res.send("Unauthorized user ")}
    }
   
   }
   catch(err){return res.send("invalid token")}
   
 

}


module.exports.tokenChecker=tokenChecker;