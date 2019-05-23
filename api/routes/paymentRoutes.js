const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/charge', async (req, res, next) => {
    const { name, amount, quantity, stripeEmail, stripeToken, id } = req.body;

    const info = await stripe.customers.create({
        email: stripeEmail,
        source: stripeToken,
    });

    const charge = await stripe.charges.create({
        amount,
        currency: 'usd',
        description: 'Purchase from Flower Co.',
        source: token,
    });

    let record = await db('orders').insert(record);

    res.status(201).json(record);
});

module.exports = router;
