const dbService = require('../services/dbService')
const objectId = require('mongodb').ObjectId

let productCollection = null;
dbService.connectToDB().then((db) => productCollection = db.collection('products'));

const getAllProducts = async () => {
    let successMessage = 'Successfully found products.'
    let errorMessage = 'Unexpected error'
    let products =  await productCollection.find({}).toArray()

    if (products) {
        return {"Message": successMessage, "data": products}
    } else {
        return {"Message": errorMessage, "data": products}
    }
}

module.exports.getAllProducts = getAllProducts
