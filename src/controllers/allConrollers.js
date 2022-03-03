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
//part 5 update
const updatedBooks= async function(req,res){
let pub = await BookModel.updateMany({publisher:"6220694cc747d3f147c193a7"}, {$set:{isHardCover : true}})
 
let hub = await BookModel.updateMany({publisher:"622068efc747d3f147c193a1"},{$set:{isHardCover: true}})


let uprice = await BookModel.find().populate('author')

let x = uprice.filter(ele => ele.author.rating>3.5)

for(let i=0;i<x.length;i++){

    let ubp = await BookModel.findOneAndUpdate({bookName:x[i].bookName},{$set:{price: (x[i].price + 10)}})
    console.log(ubp)
}

res.send({msg: pub ,hub})


}

module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.allBooks=allBooks
module.exports.updatedBooks=updatedBooks