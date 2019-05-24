exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table
            .integer('zipcode')
            .notNullable()
            .unsigned();
        table
            .integer('phone')
            .notNullable()
            .unsigned();
        table.date('birthday').notNullable();
        table.boolean('is_admin').notNullable();
        table.unique('email');
        knex.raw('SET foreign_key_checks = 0');
        knex.truncate();
        knex.raw('SET foreign_key_checks = 1');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
