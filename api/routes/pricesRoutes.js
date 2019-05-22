const express = require('express');
const router = express.Router();

// pricesModel contains the functions to get data from the prices table
const pricesModel = require('../model/pricesModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// get list of all prices
router.get('/', async (req, res, next) => {
    try {
        const prices = await pricesModel.getAll();
        res.status(200).json(prices);
    } catch (err) {
        next(err);
    }
});

// get price by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const price = await pricesModel.getById(id);

        price
            ? res.status(200).json(price)
            : res
                  .status(404)
                  .json({ message: `The price id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// get prices by product_id
router.get('/product/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const price = await pricesModel.getByProductId(id);

        price
            ? res.status(200).json(price)
            : res
                  .status(404)
                  .json({ message: `The price id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// add a new price
router.post('/', async (req, res, next) => {
    const input = req.body;

    try {
        const newprice = await pricesModel.add(input);
        res.status(202).json(newprice);
    } catch (err) {
        next(err);
    }
});

// delete a price
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const priceId = await pricesModel.deletePrice(id);
        priceId
            ? res.status(202).json(priceId)
            : res
                  .status(404)
                  .json({ message: `The price id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// update a price
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const price = await pricesModel.update(id, updatedInfo);

        price
            ? res.status(202).json(price)
            : res
                  .status(404)
                  .json({ error: `There is no price with the id: ${id}` });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
