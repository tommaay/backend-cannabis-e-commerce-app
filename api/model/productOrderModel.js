const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    getAllByOrderId,
    create,
    deleteProductOrder,
    update,
};

// get list of all product orders
function getAll() {
    return db('product_orders');
}

// get product order by id
function getById(id) {
    return db('product_orders')
        .where({ id: id })
        .first();
}

// get list of the product orders by an order id
function getAllByOrderId(id) {
    return db('product_orders').where({ order_id: id });
}

// create a new product order
async function create(orderDetails) {
    // Insert new product order and returns an id
    const order = await db('product_orders').insert(orderDetails, 'id');
    const id = parseInt(order);

    return db('orders')
        .where({ id: id })
        .first();
}

// delete a product order
async function deleteProductOrder(id) {
    const order = db('product_orders')
        .where({ id: id })
        .first();

    if (order) {
        await db('product_orders')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update a product order
async function update(id, updatedInfo) {
    const order = await db('product_orders')
        .where({ id: id })
        .first();

    if (order) {
        await db('product_orders')
            .where({ id: id })
            .update(updatedInfo);

        return db('product_orders')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}
