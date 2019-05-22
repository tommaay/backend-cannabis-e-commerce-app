const express = require('express');
const router = express.Router();
const {
    cloudinaryConfig,
    uploader,
} = require('../../middleware/cloudinaryConfig');
const { multerUploads, dataUri } = require('../../middleware/multerConfig');

// cloudinary configuration for the router
cloudinaryConfig(router);

// productsModel contains the functions to get data from the products table
const productsModel = require('../model/productsModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// get list of all products
router.get('/', async (req, res, next) => {
    let products = [];

    try {
        const list = await productsModel.getAll();

        for (let i = 0; i < list.length; i++) {
            const product = await productsModel.getById(list[i].id);
            products.push(product);
        }

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
router.patch('/:id', async (req, res, next) => {
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

// uploads image to Cloudinary and returns an image url
router.post('/upload', multerUploads, (req, res) => {
    if (req.file) {
        const file = dataUri(req).content;

        return uploader.upload(file).then(result => {
            const image = result.url;

            return res
                .status(200)
                .json(image)
                .catch(err =>
                    res.status(400).json({
                        message:
                            'Something went wrong while processing your request',
                        err: err,
                    })
                );
        });
    }
});

module.exports = router;
