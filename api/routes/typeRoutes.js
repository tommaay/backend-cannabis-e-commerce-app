const express = require('express');
const router = express.Router();

// typesModel contains the functions to get data from the types table
const typesModel = require('../model/typesModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// get list of all types
router.get('/', async (req, res, next) => {
    try {
        const types = await typesModel.getAll();
        res.status(200).json(types);
    } catch (err) {
        next(err);
    }
});

// get type by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const type = await typesModel.getById(id);

        type ? res.status(200).json(type) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// add a new type
router.post('/', async (req, res, next) => {
    const input = req.body;

    try {
        const newtype = await typesModel.add(input);
        res.status(202).json(newtype);
    } catch (err) {
        next(err);
    }
});

// delete a type
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const typeId = await typesModel.deleteType(id);
        typeId ? res.status(202).json(typeId) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// update a type
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const type = await typesModel.update(id, updatedInfo);

        type ? res.status(202).json(type) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
