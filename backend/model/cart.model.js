const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = mongoose.Schema({
    userID: ObjectId,
    items: [{
        productID: ObjectId,
        quantity: Number
    }]
}, {
    versionKey: false
})

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };