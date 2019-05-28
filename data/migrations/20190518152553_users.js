exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table
            .string('zipcode')
            .notNullable()
            .unsigned();
        table
            .string('phone')
            .notNullable()
            .unsigned();
        table.string('birthday').notNullable();
        table.boolean('is_admin').notNullable();
        table.unique('email');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
