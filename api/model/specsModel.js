const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    getByProductId,
    add,
    deleteSpec,
    update,
};

// get list of all specs
function getAll() {
    return db('specs');
}

// get spec by id
function getById(id) {
    return db('specs')
        .where({ id: id })
        .first();
}

// get specs by product_id
function getByProductId(id) {
    return db('specs').where({ product_id: id });
}

// add a new spec
async function add(newspec) {
    const spec = await db('specs').insert(newspec, 'id');
    const id = parseInt(spec);

    return db('specs')
        .where({ id: id })
        .first();
}

// delete spec
async function deleteSpec(id) {
    const spec = db('specs')
        .where({ id: id })
        .first();

    if (spec) {
        await db('specs')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update spec
async function update(id, updatedspec) {
    const spec = await db('specs')
        .where({ id: id })
        .first();

    if (spec) {
        await db('specs')
            .where({ id: id })
            .update(updatedspec);

        return db('specs')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}
