const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
//part 1
const createUser = async function (req,res) {
 
  try{
    let data = req.body;
    if(Object.keys(data).length!==0){
  let savedData = await userModel.create(data)
  
  res.status(201).send({ msg: savedData });}
  else{res.status(400).send("bad request")}
  
  }
  catch(err){res.status(400).send({ERROR:err.message})}

}
//part 2
const loginUser = async function (req, res) {
  try{
    let data =req.body
   
if(Object.keys(data).length!==0)
{
        let user = await userModel.findOne({ emailId: data.emailId, password: data.password});
     if (!user)
   { return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    })}
else{
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  )
  res.status(200).send({ status: true, data: token })}
  
}
  
else{res.status(400).send("Bad Request")}

}
  
catch(err){res.status(400).send({ERROR:err.message})}
};

//part 3

const getUserData = async function (req, res) {
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  

  res.status(200).send({ status: true, data: userDetails })
  

 
};


//part 4
const updateUser = async function (req, res) {
  try{
  let ptu= req.body
  console.log(ptu)
  
  if(Object.keys(ptu).length!==0){
  
  
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, {$set:ptu},{new:true});
  res.status(200).send({ status: "updated user", data: updatedUser });}
 
  else{res.status(400).send("Bad Request")}
  
  
}
  catch(err){res.status(400).send({ERROR:err.message})}


}



//part 5 
let deleteUser = async function(req,res){
  
  try{
  
 
let user1 = await userModel.findOneAndUpdate({_id:req.params.userId},{$set:{isDeleted:true}},{new:true})
res.status(200).send ({status : "deleted" , data: user1})
 }



catch(err){res.status(400).send({ERROR:err.message})}


}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;