const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    addedQuantity: Number,
},{
    versionKey: false
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = {ProductModel};