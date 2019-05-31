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
    return db('products').select('id');
}

// get product by id
async function getById(id) {
    const product = await db('products')
        .where({ id: id })
        .first();

    const specs = await db('specs').where({ product_id: id });
    const category = await db('categories')
        .where({ id: product.category })
        .first();
    const type = await db('types')
        .where({ id: product.type })
        .first();

    product.specs = specs;
    product.category = category;
    product.type = type;

    return product;
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
