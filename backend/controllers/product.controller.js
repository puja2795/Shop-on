const { ProductModel } = require("../model/product.model");


// add all products to database
const addAllProducts = async (req, res) => {
    const payload = req.body;
    try {
        const allData = await ProductModel.insertMany(payload)
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
    const {price,rating,fabric,sleeveLength,pattern,reviews,category,productFor} = req.params;

    try {
        
    } catch (error) {
        
    }
}



module.exports = { addAllProducts };