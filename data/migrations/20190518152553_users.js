exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('password', 1000).notNullable();
        table.string('zipcode').notNullable();
        table.string('phone').notNullable();
        table.string('birthday').notNullable();
        table.boolean('is_admin').notNullable();
        table.unique('email');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
