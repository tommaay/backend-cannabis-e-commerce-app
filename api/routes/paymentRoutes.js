const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.get('/', (req, res, next) => {
    res.status(202).send(process.env.STRIPE_PUBLISHABLE_KEY);
});

router.post('/charge', async (req, res, next) => {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                name: 'T-shirt',
                description: 'Comfortable cotton t-shirt',
                images: ['https://example.com/t-shirt.png'],
                amount: 500,
                currency: 'usd',
                quantity: 1,
            },
        ],
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });
});

module.exports = router;
