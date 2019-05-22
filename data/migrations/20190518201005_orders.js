exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', table => {
        table.increments();
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table.date('date').notNullable();
        table.integer('subtotal').notNullable();
        table.integer('tax').notNullable();
        table.integer('total').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('orders');
};
