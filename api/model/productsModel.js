const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    deleteProduct,
    update,
};

// get list of all products
function getAll() {
    return db('products');
}

// get product by id
function getById(id) {
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
