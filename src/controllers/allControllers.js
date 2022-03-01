const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")


//part 1
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


//part 2

const createAuthor= async function (req, res) {
    let data = req.body;
    let savedData= await authorModel.create(data)
   res.send({msg: savedData})
}

//part 3
const cbBoookList = async function ( req, res){

let  idAuthor = await authorModel.find({authorName:"Chetan Bhagat"}).select({author_id :1 , _id:0});
console.log(idAuthor)
const id = idAuthor[0].author_id
console.log(id)
let bookNames = await BookModel.find({author_id : id}).select({name:1, _id:0})
console.log(bookNames)
res.send ({msg:bookNames})
}

//part 4

const updatedBookPrice = async function (req,res){

    let idBook = await BookModel.findOneAndUpdate({name : "Two States"},{$set: {price:100}},{new:true}).select({author_id : 1 , price:1,_id:0})
    console.log(idBook)

    let id = idBook.author_id
    let newPrice=idBook.price
    console.log(newPrice)
    console.log(id)
    
    let authorName = await authorModel.find({author_id : id}).select({authorName:1,_id:0})
    console.log(authorName)
    res.send({msg:authorName , newPrice})

}

//part 5 

const books= async function(req,res){
 let availableBooks = await BookModel.find({price : {$gte:50 , $lte:100}}).select({author_id:1,_id:0})
 console.log(availableBooks)
 let id = availableBooks.map(ele => ele.author_id)
 console.log(id)
 
 let arr=[]
 for (let i=0;i<id.length;i++){

    let x = id[i]

   let authorNames = await authorModel.find({author_id : x}).select({authorName:1 , _id:0})
   
   arr.push(authorNames)

 }

 console.log(arr)
 res.send({msg : arr})
}



module.exports.createBook=createBook;
module.exports.createAuthor =createAuthor;
module.exports.cbBoookList=cbBoookList;
module.exports.updatedBookPrice=updatedBookPrice;
module.exports.books=books;
