const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const myOrdersSchema = mongoose.Schema({
    userID: ObjectId,
    items: [{
        productID: ObjectId,
        quantity: Number
    }]
}, {
    versionKey: false
})

const MyOrdersModel = mongoose.model("myOrders", myOrdersSchema);

module.exports = { MyOrdersModel };