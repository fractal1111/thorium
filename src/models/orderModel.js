const mongoose = require('mongoose');

const ObjectId= mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'Consumer'
    
    },
    product: {
    type: ObjectId,
    ref: 'Products'
    },


amount:{
   type:Number,
    default: 0
},
isFreeAppUser : {
    type: Boolean,
    default : false
}



},{timestamps:true})

module.exports = mongoose.model('Orders' , orderSchema)