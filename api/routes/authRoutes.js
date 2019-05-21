const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authModel = require('../model/authModel');

router.post('/register', async (req, res, next) => {
    const userInfo = req.body;
    // hash the password to be stored in the database
    const hashedPassword = bcrypt.hashSync(userInfo.password, 11);
    userInfo.password = hashedPassword;

    try {
        const registeredUser = await authModel.register(userInfo);
        const token = authModel.generateToken(registeredUser);

        res.status(201).json({ user: registeredUser, token: token });
    } catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    const loginCreds = req.body;

    try {
        const user = await authModel.login(loginCreds);

        // check to see if password is valid for the email
        if (user && bcrypt.compareSync(loginCreds.password, user.password)) {
            const token = await authModel.generateToken(user);

            res.status(202).json({ user: user, token: token });
        } else {
            res.status(401).json({ error: 'Unauthorized credentials' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
