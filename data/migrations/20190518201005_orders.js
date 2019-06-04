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
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('subtotal').notNullable();
        table.float('tax_rate').notNullable();
        table.integer('tax').notNullable();
        table.integer('delivery').notNullable();
        table.integer('total').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('orders');
};
