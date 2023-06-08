const productController = require('../controllers/productController')

const routes = (app) => {

    app.get('/products', productController.getAllProducts)

    // app.get('/pig/:pigName',pigController.getPig)
    // app.get('/pigs',pigController.getPigs)
    // app.post('/pigs',pigController.addPig)
    // app.delete('/pigs',pigController.deletePig)
    // app.put('/pigs',pigController.updatePig)
}

module.exports = routes