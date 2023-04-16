const { ProductModel } = require("../model/product.model");
const { CartModel } = require("../model/cart.model");
const { UserModel } = require("../model/user.model");
const { MyOrdersModel } = require("../model/myOrders.model");
const jwt = require('jsonwebtoken');

/*
when a user places his orders ->
    add all the data present in the cart to myOrders.
    delete cart data of that user.
*/

const addCartDataToMyOrders = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "my_signature");
    try {
        const cart = await CartModel.findOne({ "userID": decoded.userID });
        const cartID = cart._id;
        const newUserID = cart.userID;
        const newItems = cart.items;
        let myOrders = await MyOrdersModel.findOne({ "userID": decoded.userID });
        // if myOrder exists for the user.
        if (myOrders) {
            newItems.forEach((elem) => {
                myOrders.items.push(elem);
            })
            await myOrders.save();
        } else {
            // if myOrder does not exists for the user
            await MyOrdersModel.create({ userID: newUserID, items: newItems });
        }
        // delete the cart after copying the data from the cart.
        await CartModel.findByIdAndDelete({ _id : cartID });
        myOrders = await MyOrdersModel.findOne({ "userID": decoded.userID });
        if (!myOrders) {
            throw new Error("No orders found for this user.");
        }
        res.status(200).send(myOrders);

    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}


module.exports = {addCartDataToMyOrders}