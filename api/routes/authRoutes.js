const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authModel = require('../model/authModel');

router.post('/register', async (req, res, next) => {
    const userInfo = req.body;
    const hashedPassword = bcrypt.hashSync(userInfo.password, 11);
    userInfo.password = hashedPassword;

    try {
        const registeredUser = authModel.register(userInfo);
        const token = authModel.generateToken(registeredUser);

        res.status(201).json({ user: registeredUser, token: token });
    } catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    const loginCreds = req.body;

    try {
        const user = authModel.login(loginCreds);

        if (user && bcrypt.compareSync(loginCreds.password, user.password)) {
            const token = authModel.generateToken(user);

            res.status(202).json({ user: user, token: token });
        } else {
            res.status(401).json({ error: 'Unauthorized credentials' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
