const { ProductModel } = require("../model/product.model");
const { CartModel } = require("../model/cart.model");
const jwt = require('jsonwebtoken');


// Get cart data
const getCartData = async (req, res) => {
    const { prodID } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "my_signature");
    try {
        const cart = await CartModel.findOne({ "userID": decoded.userID });
        res.status(200).send(cart.items);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

// Delete from cart
const deleteFromCart = async (req, res) => {
    const { prodID } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "my_signature");
    try {
        const cart = await CartModel.findOne({ "userID": decoded.userID });
        cart.items = cart.items.filter((elem) => elem.productID != prodID);
        await cart.save();
        const product = await ProductModel.findOne({ _id: prodID });
        product.addedQuantity = 0;
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }

}

module.exports = { getCartData, deleteFromCart };