const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/charge', async (req, res, next) => {
    try {
        const response = await stripe.charges.create(req.body);

        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
