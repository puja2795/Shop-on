const { ProductModel } = require("../model/product.model");
const { CartModel } = require("../model/cart.model");
const { UserModel } = require("../model/user.model");
const jwt = require('jsonwebtoken');


// Get cart data
const getCartData = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "my_signature");

  try {
    // Find the cart for the user
    const cart = await CartModel.findOne({ userID: decoded.userID });

    if (!cart) {
      return res.status(404).send({ msg: "Cart not found" });
    }

    // Get the productIDs from the cart items
    const productIDs = cart.items.map((item) => item.productID);

    // Find the matching products
    const products = await ProductModel.find({ _id: { $in: productIDs } });

    // Map the product data to include the quantity from the cart items
    // const cartItems = cart.items.map((item) => {
    //   const product = products.find((p) => p._id.toString() === item.productID.toString());
    //   return { ...product.toObject(), quantity: item.quantity };
    // });

    const cartItems = cart.items.map((item) => {
      const product = products.find((p) => p._id.toString() === item.productID.toString());

      if (product) {
        return { ...product.toObject(), addedQuantity: item.quantity };
      } else {
        return { productID: item.productID, addedQuantity: item.quantity };
      }
    });


    res.status(200).send(cartItems);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};


// Delete from cart
const deleteFromCart = async (req, res) => {
  const prodID = req.params.prodID;
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