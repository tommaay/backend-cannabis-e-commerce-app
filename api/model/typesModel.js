const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    add,
    deleteType,
    update,
};

// get list of all types
function getAll() {
    return db('types');
}

// get type by id
function getById(id) {
    return db('types')
        .where({ id: id })
        .first();
}

// add a new type
async function add(newType) {
    const type = await db('types').insert(newType);
    const id = type[0];

    return db('types')
        .where({ id: id })
        .first();
}

// delete type
async function deleteType(id) {
    const type = db('types')
        .where({ id: id })
        .first();

    if (type) {
        await db('types')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update type
async function update(id, updatedType) {
    const type = await db('types')
        .where({ id: id })
        .first();

    if (type) {
        await db('types')
            .where({ id: id })
            .update(updatedType);

        return db('types')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}
