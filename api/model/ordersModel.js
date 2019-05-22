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
    const order = await db('orders').insert(orderDetails);
    const id = order[0];

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

// get order by id
function getById(id) {
    return db('orders')
        .where({ id: id })
        .first();
}

// get all of the orders by a user's id
function getAllByUserId(id) {
    return db('orders').where({ user_id: id });
}
