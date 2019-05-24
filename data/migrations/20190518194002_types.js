exports.up = function(knex, Promise) {
    return knex.schema.createTable('types', table => {
        table.increments();
        table.string('name').notNullable();
        table.unique('name');
        knex.raw('SET foreign_key_checks = 0');
        knex.truncate();
        knex.raw('SET foreign_key_checks = 1');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('types');
};
