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
    const { price, rating, fabric, sleeveLength, pattern, reviews, category, productFor } = req.query;
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
        filters.rating = { $gte: Number(rating)};
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
    // if (reviews) {
    //   filters.reviews = {
    //     $gte: Number(reviews)
    //   };
    // }
    if (category) {
        filters.category = category;
    }
    if (productFor) {
        filters.productFor = productFor;
    }
    console.log(filters)
    try {
        const products = await ProductModel.find(filters);

        const token = req.headers.authorization.split(" ")[1];
        // console.log("token", token)
        const decoded = jwt.verify(token, "my_signature");
        // console.log("decoded", decoded)

        const cart = await CartModel.findOne({ "userID": decoded.userID });
        if (!cart) {
            res.status(200).send(products);
        }
        else {
            if(cart.items.length !== 0){
                const updatedData = products.map((prod) => {
                    cart.items.map((item) => {
                        if (prod._id == item.productID) {
                            prod.addedQuantity = item.quantity;
                        }
                    })
                })
                res.status(200).send(updatedData);
            }
            else{
                res.status(200).send(products);                
            }
        }

    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}




module.exports = { addAllProducts, getProducts };