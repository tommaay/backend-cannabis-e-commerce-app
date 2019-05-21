const express = require('express');
const router = express.Router();

// usersModel contains the functions to get data from the users table
const usersModel = require('../../data/model/usersModel');

router.get('/', async (req, res, next) => {
    try {
        const users = await usersModel.getAll();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await usersModel.getById(id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
