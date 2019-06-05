const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/charge', async (req, res, next) => {
    console.log('req.body', req.body);
    try {
        const response = await stripe.charges.create(req.body);
        console.log('res', res);
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
