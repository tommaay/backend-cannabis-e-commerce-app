const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// usersModel contains the functions to get data from the users table
const usersModel = require('../model/usersModel');

// register a new user
router.post('/register', async (req, res, next) => {
    const userInfo = req.body;
    // hash the password to be stored in the database
    const hashedPassword = bcrypt.hashSync(userInfo.password, 11);
    userInfo.password = hashedPassword;

    try {
        const registeredUser = await usersModel.register(userInfo);
        const token = await usersModel.generateToken(registeredUser);
        console.log(registeredUser);

        res.status(201).json({ user: registeredUser, token });
    } catch (err) {
        next(err);
    }
});

// user login
router.post('/login', async (req, res, next) => {
    const loginCreds = req.body;

    try {
        const user = await usersModel.login(loginCreds);

        // check to see if password is valid for the email
        if (user && bcrypt.compareSync(loginCreds.password, user.password)) {
            const token = await usersModel.generateToken(user);

            res.status(202).json({ user: user, token: token });
        } else {
            next({ status: 401 });
        }
    } catch (err) {
        next(err);
    }
});

// get list of all users
router.get('/', async (req, res, next) => {
    try {
        const users = await usersModel.getAll();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

// get user by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await usersModel.getById(id);
        user ? res.status(200).json(user) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// delete user
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const userId = await usersModel.deleteUser(id);

        userId ? res.status(202).json(userId) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

// update user
router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const updatedInfo = req.body;

    console.log(updatedInfo.password);
    // hash the password to be stored in the database
    if (updatedInfo.password.length > 0) {
        const hashedPassword = bcrypt.hashSync(updatedInfo.password, 11);
        updatedInfo.password = hashedPassword;

        console.log(updatedInfo.password);
    }

    try {
        const user = await usersModel.update(id, updatedInfo);

        user ? res.status(202).json(user) : next({ status: 404 });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
