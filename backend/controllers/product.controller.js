const { ProductModel } = require("../model/product.model");
const { CartModel } = require("../model/cart.model");
const jwt = require('jsonwebtoken');

// add all products to database
const addAllProducts = async (req, res) => {
    const payload = req.body;
    try {
        await ProductModel.insertMany(payload)
            .then(docs => {
                console.log("Multiple documents inserted to Product collection");
                res.status(200).send({ "msg": "Multiple documents inserted to Product collection" })
            })
            .catch(error => {
                console.error(error);
            });

    } catch (error) {
        res.status(400).send({ "msg": err.message });
    }
}

// get products data
const getProducts = async (req, res) => {
    const { price, rating, fabric, sleeveLength, pattern, reviews, category, productFor, page = 1, limit = 10, sort } = req.query;
    const filters = {};

    if (price) {
        if (price.includes('-')) {
            const [minPrice, maxPrice] = price.split('-');
            filters.price = {
                $gte: Number(minPrice),
                $lte: Number(maxPrice)
            };
        } else {
            const maxPrice = Number(price);
            filters.price = {
                $lte: maxPrice
            };
        }
    }

    if (rating) {
        filters.rating = { $gte: Number(rating) };
    }

    if (fabric) {
        filters.fabric = fabric;
    }

    if (sleeveLength) {
        filters.sleeveLength = sleeveLength;
    }

    if (pattern) {
        filters.pattern = pattern;
    }

    if (category) {
        filters.category = category;
    }

    if (productFor) {
        filters.productFor = productFor;
    }

    console.log(filters);

    try {
        const sortOptions = {};
        if (sort === 'asc') {
            sortOptions.price = 1;
        } else if (sort === 'desc') {
            sortOptions.price = -1;
        }

        const products = await ProductModel.find(filters).sort(sortOptions).skip((page - 1) * limit).limit(limit);
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            // return products if user is not logged in
            return res.status(200).send(products);
        }

        const decoded = jwt.verify(token, "my_signature");
        const cart = await CartModel.findOne({ "userID": decoded.userID });

        if (!cart || cart.items.length === 0) {
            // return products if user is logged in but has no items in cart
            return res.status(200).send(products);
        }

        // update products with added quantity if user is logged in and has items in cart
        const updatedData = products.map((prod) => {
            const cartItem = cart.items.find((item) => String(item.productID) === String(prod._id));
            if (cartItem) {
                prod.addedQuantity = cartItem.quantity;
            }
            return prod;
        });

        return res.status(200).send(updatedData);

    } catch (error) {
        return res.status(400).send({ "msg": error.message });
    }
}

// Get single product data
const getSingleProduct = async (req, res) => {
    const { prodID } = req.params;
    const token = req.headers.authorization?.split(" ")[1];
    const cart = token ? await CartModel.findOne({ "userID": jwt.verify(token, "my_signature").userID }) : null;
    try {
        const product = await ProductModel.findOne({ _id: prodID });
        const cartItem = cart?.items.find(elem => elem.prodID === prodID);
        console.log(cartItem)
        if (cartItem) {
            product.addedQuantity = cartItem.quantity;
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

// update quantity in product and cart
const updateProductData = async (req, res) => {
    const { _id, addedQuantity } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "my_signature");
    const cart = await CartModel.findOne({ "userID": decoded.userID });
    try {
        const product = await ProductModel.findOne({ _id });
        product.addedQuantity = addedQuantity;
        const cartItem = cart.items.find(elem => elem.productID == _id);
        if (cartItem) {
            cartItem.quantity = addedQuantity;
        }
        else {
            cart.items.push({ productID: _id, quantity: addedQuantity });
        }
        cart.items = cart.items.filter((elem) => elem.quantity !== 0);
        await cart.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

module.exports = { addAllProducts, getProducts, getSingleProduct, updateProductData };