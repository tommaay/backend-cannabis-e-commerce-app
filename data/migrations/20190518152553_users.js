exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', field => {
        field.increments();
        field.string('firstname').notNullable();
        field.string('lastname').notNullable();
        field.string('email').notNullable();
        field.string('password').notNullable();
        field
            .integer('zipcode')
            .notNullable()
            .unsigned();
        field
            .integer('phone')
            .notNullable()
            .unsigned();
        field.date('birthday').notNullable();
        field.boolean('is_admin').notNullable();
        field.unique('email');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
