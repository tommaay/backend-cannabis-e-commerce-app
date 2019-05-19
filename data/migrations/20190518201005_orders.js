exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', field => {
        field.increments();
        field
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        field.integer('subtotal').notNullable();
        field.integer('tax').notNullable();
        field.integer('total').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('orders');
};
