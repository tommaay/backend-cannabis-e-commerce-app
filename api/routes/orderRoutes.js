const express = require('express');
const router = express.Router();

// ordersModel contains the functions to get data from the orders table
const ordersModel = require('../model/ordersModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// create a new order
router.post('/', async (req, res, next) => {
    const orderInfo = req.body;

    try {
        const newOrder = await ordersModel.add(orderInfo);

        res.status(202).json(newOrder);
    } catch (err) {
        next(err);
    }
});

// delete a order
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const orderId = await ordersModel.deleteOrder(id);

        orderId
            ? res.status(202).json(orderId)
            : res
                  .status(404)
                  .json({ error: `There is no order with the id: ${id}` });
    } catch (err) {
        next(err);
    }
});

// update a order
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const order = await ordersModel.update(id, updatedInfo);

        order
            ? res.status(202).json(order)
            : res
                  .status(404)
                  .json({ error: `There is no order with the id: ${id}` });
    } catch (err) {
        next(err);
    }
});

// get list of all orders
router.get('/', async (req, res, next) => {
    try {
        const orders = await ordersModel.getAll();
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
});

// get order by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const order = await ordersModel.getById(id);

        order
            ? res.status(200).json(order)
            : res
                  .status(404)
                  .json({ error: `The order id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// get all of the orders by user id
router.get('/user/:id', async (req, res, next) => {
    const userId = req.params.id;

    try {
        const orders = await ordersModel.getAllByUserId(userId);
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
