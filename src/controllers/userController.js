const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let book= req.body
    let savedBook= await UserModel.create(book)
    res.send({msg: savedBook})
}

const getLibrary= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook;
module.exports.getLibrary= getLibrary;