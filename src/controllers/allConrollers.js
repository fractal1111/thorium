const AuthorModel= require("../models/authorModel")
const PublisherModel = require("../models/publisherModel")
const BookModel = require("../models/bookModel")


//part 1

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}
//part 2
const createPublisher= async function (req, res) {
   let publisher = req.body
   let publisherCreated = await PublisherModel.create(publisher)
   res.send({data : publisherCreated})
}


//part 3
const createBook = async function(req,res){
 
if(!req.body.author )
{res.send("Please mention Author ID")}

if(!req.body.publisher)
{res.send("Please mention Publisher ID")}

let ai= await AuthorModel.find({_id : req.body.author})
if(ai.length==0){ res.send("Invalid Author ID")}

let pi= await PublisherModel.find({_id : req.body.publisher})
if(pi.length==0){res.send("Invalid Publisher Id")}


let b = req.body

let bookCreated = await BookModel.create(b)
res.send({msg:bookCreated})
 

}

//part 4
const allBooks = async function(req,res){


let library = await BookModel.find().populate('author').populate('publisher')
res.send({msg:library})



}


module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.allBooks=allBooks