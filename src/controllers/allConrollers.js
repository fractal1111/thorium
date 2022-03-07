

const a = function(req,res){
    res.send({msg:"1st api"})
}

const b = function(req,res){
    res.send({msg:"2nd api"})
}

const c = function(req,res){
    res.send({msg:"3rd api"})
}

const d = function(req,res){
    res.send({msg:"4t api"})
}

module.exports.a=a
module.exports.b=b
module.exports.c=c
module.exports.d=d
