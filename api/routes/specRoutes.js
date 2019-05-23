const express = require('express');
const router = express.Router();

// specsModel contains the functions to get data from the specs table
const specsModel = require('../model/specsModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// get list of all specs
router.get('/', async (req, res, next) => {
    try {
        const specs = await specsModel.getAll();
        res.status(200).json(specs);
    } catch (err) {
        next(err);
    }
});

// get spec by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const spec = await specsModel.getById(id);

        spec ? res.status(200).json(spec) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// get specs by product_id
router.get('/product/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const spec = await specsModel.getByProductId(id);

        spec ? res.status(200).json(spec) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// add a new spec
router.post('/', async (req, res, next) => {
    const input = req.body;

    try {
        const newspec = await specsModel.add(input);
        res.status(202).json(newspec);
    } catch (err) {
        next(err);
    }
});

// delete a spec
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const specId = await specsModel.deleteSpec(id);
        specId ? res.status(202).json(specId) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// update a spec
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const spec = await specsModel.update(id, updatedInfo);

        spec ? res.status(202).json(spec) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
