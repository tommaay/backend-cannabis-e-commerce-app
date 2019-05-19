exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('description', 5000);
        table.unique('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('categories');
};
