const express = require('express');
const router = express.Router();

// categoriesModel contains the functions to get data from the categories table
const categoriesModel = require('../model/categoriesModel');

// contains the functions from the usersModel
const usersModel = require('../model/usersModel');

// get list of all categories
router.get('/', async (req, res, next) => {
    try {
        const categories = await categoriesModel.getAll();
        res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
});

// get category by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const category = await categoriesModel.getById(id);

        category
            ? res.status(200).json(category)
            : res
                  .status(404)
                  .json({ message: `The category id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// add a new category
router.post('/', async (req, res, next) => {
    const input = req.body;

    try {
        const newCategory = await categoriesModel.add(input);
        res.status(202).json(newCategory);
    } catch (err) {
        next(err);
    }
});

// delete a category
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const categoryId = await categoriesModel.deleteCategory(id);
        categoryId
            ? res.status(202).json(categoryId)
            : res
                  .status(404)
                  .json({ message: `The category id: ${id} was not found` });
    } catch (err) {
        next(err);
    }
});

// update a category
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    try {
        const category = await categoriesModel.update(id, updatedInfo);

        category
            ? res.status(202).json(category)
            : res
                  .status(404)
                  .json({ error: `There is no category with the id: ${id}` });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
