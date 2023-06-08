const productService = require('../services/productService')

const getAllProducts = (req, res) => {
    productService.getAllProducts().then((allProducts) => res.json(allProducts))
}

module.exports.getAllProducts = getAllProducts