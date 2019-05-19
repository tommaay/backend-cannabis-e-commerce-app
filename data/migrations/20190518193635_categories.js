exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', field => {
        field.increments();
        field.string('name').notNullable();
        field.string('description', 2000);
        field.unique('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('categories');
};
