const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    categoryName : String,
    year : Number},

    { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 



