const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    add,
    deletePrice,
    update,
};

// get list of all prices
function getAll() {
    return db('prices');
}

// get price by id
function getById(id) {
    return db('prices')
        .where({ id: id })
        .first();
}

// add a new price
async function add(newPrice) {
    const price = await db('prices').insert(newPrice);
    const id = price[0];

    return db('prices')
        .where({ id: id })
        .first();
}

// delete price
async function deletePrice(id) {
    const price = db('prices')
        .where({ id: id })
        .first();

    if (price) {
        await db('prices')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update price
async function update(id, updatedPrice) {
    const price = await db('prices')
        .where({ id: id })
        .first();

    if (price) {
        await db('prices')
            .where({ id: id })
            .update(updatedPrice);

        return db('prices')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}
