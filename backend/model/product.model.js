const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    rating: Number,
    fabric: String,
    sleeveLength: String,
    pattern: String,
    reviews: String,
    category: String,
    productFor: String,
    addedQuantity: Number,
}, {
    versionKey: false
})

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };