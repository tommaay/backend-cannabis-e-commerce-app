const db = require('../../data/dbConfig');

module.exports = {
    create,
    deleteOrder,
    update,
    getAll,
    getById,
    getAllByUserId,
};

// create a new order
async function create(orderDetails) {
    // Inserts new order and returns an id
    const order = await db('orders').insert(orderDetails, 'id');
    const id = parseInt(order);

    return db('orders')
        .where({ id: id })
        .first();
}

// delete an order
async function deleteOrder(id) {
    const order = db('orders')
        .where({ id: id })
        .first();

    if (order) {
        await db('orders')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update an order
async function update(id, updatedInfo) {
    const order = await db('orders')
        .where({ id: id })
        .first();

    if (order) {
        await db('orders')
            .where({ id: id })
            .update(updatedInfo);

        return db('orders')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}

// get list of all orders
function getAll() {
    return db('orders');
}

const specsModel = require('./specsModel');

// get order by id
async function getById(id) {
    const order = await db('orders')
        .where({ id: id })
        .first();

    const productOrders = await db('product_orders').where({ order_id: id });

    for (let i = 0; i < productOrders.length; i++) {
        let p = productOrders[i];

        const product = await db('products')
            .where({ id: p.product_id })
            .first();

        const spec = await db('specs')
            .where({ id: p.spec_id })
            .first();

        const obj = {
            product_order_id: p.id,
            product_id: product.id,
            name: product.name,
            image: product.image,
            spec_id: spec.id,
            size: spec.size,
            price: spec.price,
            quantity: p.quantity,
            total: p.total,
        };

        productOrders[i] = obj;
    }

    return {
        id: order.id,
        user_id: order.user_id,
        create_at: order.create_at,
        delivery: order.delivery,
        tax_rate: order.tax_rate,
        tax: order.tax,
        total: order.total,
        products: productOrders,
    };
}

// get all of the orders by a user's id
function getAllByUserId(id) {
    return db('orders').where({ user_id: id });
}
