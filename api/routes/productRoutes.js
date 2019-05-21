const express = require('express');
const router = express.Router();

// productsModel contains the functions to get data from the products table
const productsModel = require('../model/productsModel');

// usersModel contains the functions to get data from the users table
const usersModel = require('../model/usersModel');

// get list of all products
router.get('/', async (req, res, next) => {
    try {
        const products = await productsModel.getAll();
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
});

// get product by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const product = await productsModel.getById(id);
        product
            ? res.status(200).json(product)
            : res
                  .status(404)
                  .json({ error: `The product id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// add a new product
router.post('/', async (req, res, next) => {
    const newProductInfo = req.body;

    try {
        const newProduct = await productsModel.add(newProductInfo);

        res.status(202).json(newProduct);
    } catch (err) {
        next(err);
    }
});

// delete a product
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const productId = await productsModel.deleteproduct(id);

        productId
            ? res.status(202).json(productId)
            : res
                  .status(404)
                  .json({ error: `There is no product with the id: ${id}` });
    } catch (err) {
        next(err);
    }
});

// update a product
router.patch('/update/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const product = await productsModel.update(id, updatedInfo);

        product
            ? res.status(202).json(product)
            : res
                  .status(404)
                  .json({ error: `There is no product with the id: ${id}` });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
