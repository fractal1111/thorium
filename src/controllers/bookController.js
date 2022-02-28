const { count } = require("console")
const BookModel= require("../models/bookModel")

//part 1
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
// part 2
const booksList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1 , authorName :1 , _id : 0})

    res.send({msg: allBooks})}

// part 3 (not working)
 const getBooksInYear = async function(req , res) {

        let y=req.query.year
        let allBooks = await BookModel.find({year:y})
        res.send({msg : allBooks})
    
    
    }


// part 4 
const getParticularBook = async function(req,res){

    let y = req.query.year
    let an = req.query.authorName
    let pages = req.querry.pages
    let price = req.querry.price
    
    let allBooks= await BookModel.find({authorName:{$eq : an}})
    res.send({msg :allBooks})



}

//part 5 (not working)

const getIXINRBooks = async function( req , res){

 let allBooks = await BookModel.find({ "prices.indianPrices": { $in : ['100','200','500']} })
 res.send({msg : allBooks})
}



// part 6
const getRandomBooks = async function(req,res){
let allBooks = await BookModel.find({$or : [{ isStockAvailable : true}, {totalPages: { $gt : 500 }}]})
res.send({msg : allBooks})

}

module.exports.createBook= createBook
module.exports.booksList= booksList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBook= getParticularBook
module.exports.getRandomBooks= getRandomBooks
module.exports.getIXINRBooks=getIXINRBooks;

    