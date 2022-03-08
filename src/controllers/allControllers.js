const UserModel= require("../models/userModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")
//part1
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)

    res.send({msg: savedData})
}
//part 2
const createProduct= async function(req,res){
let data = req.body
let saveData = await ProductModel.create(data)
res.send({msg:saveData})

}
//part 3

const createOrder = async function(req,res){
    let header = req.headers.isfreeappuser

    let uid = req.body.user
    let pid = req.body.product
    let data = req.body

    let ui = await UserModel.find({_id:uid})

    if(ui.length==0){res.send("Invalid User Id")}

    let pi = await ProductModel.find({_id:pid})
    if(pi.length==0){res.send("Invalid Prosuct Id")}





//if header is true
 if (header==='true'){
    let savedOrder = await OrderModel.create(data)
    let updatedStatus = await OrderModel.updateOne({user:uid},{$set:{isFreeAppUser:true}})
    let updatedStatus1 = await UserModel.updateOne({_id:uid},{$set:{isFreeAppUser:true}})
    let finalObject1= await OrderModel.find({user:uid})
    return res.send({msg:finalObject1})

}
//if header is false
 if(header==='false') {

    let product = await ProductModel.findOne({_id:pid})
    let p =product.price

    let user = await UserModel.findOne({_id:uid})
    let b = user.balance

    if(p[0]>b[0]){ return res.send("Insufficient Balance")}

    let savedOrder = await OrderModel.create(data)

    let newBalance = b[0]-p[0]

    let updatedBalance = await UserModel.updateOne({_id:uid},{$set:{balance:newBalance}})
    let updatedAmount = await OrderModel.updateOne({user:uid},{$set:{amount:p[0]}})
    let finalObject= await OrderModel.find({user:uid})

    res.send({msg:finalObject})

    }
}





module.exports.createUser= createUser
module.exports.createProduct= createProduct
module.exports.createOrder= createOrder