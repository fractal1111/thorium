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
    let x = await PublisherModel.find({publisherName:{$in:["Penguin","Harper Collins"]}}).select({_id:1})
    let y = x.map(ele=>ele._id)
    let z=[]
    
    for(let i=0;i<y.length;i++){
     
        let ihc = await BookModel.updateMany({publisher:y[i]},{$set:{isHardCover:true}},{new:true})
        
        z.push(ihc)

    }
    
    let a = await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let id = a.map(inp=>inp._id)
    let updatedPrice=[]
    for(let j=0;j<id.length;j++){
        let up = await BookModel.updateMany({author:id[j]},{$inc:{price:+10}},{new:true})
        updatedPrice.push(up)
       

    } 
    res.send({msg: z,updatedPrice})

}

module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.allBooks=allBooks
module.exports.updatedBooks=updatedBooks