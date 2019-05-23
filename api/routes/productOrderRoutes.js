const express = require('express');
const router = express.Router();

// productOrderModel contains the functions to get data from the orders table
const productOrderModel = require('../model/productOrderModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// get list of all product orders
router.get('/', async (req, res, next) => {
    try {
        const orders = await productOrderModel.getAll();
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
});

// get product order by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const order = await productOrderModel.getById(id);

        order ? res.status(200).json(order) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// get list of the product orders by an order id
router.get('/order/:id', async (req, res, next) => {
    const orderId = req.params.id;

    try {
        const productOrders = await productOrderModel.getAllByOrderId(orderId);
        res.status(200).json(productOrders);
    } catch (err) {
        next(err);
    }
});

// create a new product order
router.post('/', async (req, res, next) => {
    const orderInfo = req.body;

    try {
        const newOrder = await productOrderModel.create(orderInfo);

        res.status(202).json(newOrder);
    } catch (err) {
        next(err);
    }
});

// delete a product order
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const orderId = await productOrderModel.deleteProductOrder(id);

        orderId ? res.status(202).json(orderId) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// update a product order
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const order = await productOrderModel.update(id, updatedInfo);

        order ? res.status(202).json(order) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
