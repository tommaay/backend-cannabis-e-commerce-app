const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    add,
    deleteCategory,
    update,
};

// get list of all categories
function getAll() {
    return db('categories');
}

// get category by id
function getById(id) {
    return db('categories')
        .where({ id: id })
        .first();
}

// add a new category
async function add(newCategory) {
    const category = await db('categories').insert(newCategory, 'id');
    const id = parseInt(category);

    return db('categories')
        .where({ id: id })
        .first();
}

// delete category
async function deleteCategory(id) {
    const category = db('categories')
        .where({ id: id })
        .first();

    if (category) {
        await db('categories')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update category
async function update(id, updatedCategory) {
    const category = await db('categories')
        .where({ id: id })
        .first();

    if (category) {
        await db('categories')
            .where({ id: id })
            .update(updatedCategory);

        return db('categories')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}
