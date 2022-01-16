const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Company:{
        type:String,
        required:false
    },
    rating:{
        type:String,
        required:true
    },
    rating_nos:{
        type:String,
        required:true
    },
    tagname:[String],
    image:[String],
    product_category:[String]
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;