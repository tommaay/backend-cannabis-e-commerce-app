const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    add,
    deleteProduct,
    update,
};

// get list of all products
function getAll() {
    return db('prices');
}

// get product by id
function getById(id) {
    return db('products')
        .where({ id: id })
        .first();
}

// add a new product
async function add(newProductInfo) {
    const product = await db('products').insert(newProductInfo);
    const id = product[0];

    return db('products')
        .where({ id: id })
        .first();
}

// delete product
async function deleteProduct(id) {
    const product = db('products')
        .where({ id: id })
        .first();

    if (product) {
        await db('products')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update product
async function update(id, updatedInfo) {
    const product = await db('products')
        .where({ id: id })
        .first();

    if (product) {
        await db('products')
            .where({ id: id })
            .update(updatedInfo);

        return db('products')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}
