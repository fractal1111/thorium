const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:String,
    author_id : {
        require :true ,
        type : Number
    },
    price: Number,
    rating: Number
   

}, { timestamps: true });


module.exports = mongoose.model('BooksMongo3', bookSchema) 






 
   
