const productRepository = require('../repositories/productRepository')

const getAllProducts = async () => {
    return await productRepository.getAllProducts()
}

module.exports.getAllProducts = getAllProducts