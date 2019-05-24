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
        table.float('tax').notNullable();
        table.integer('total').notNullable();
        knex.raw('SET foreign_key_checks = 0');
        knex.truncate();
        knex.raw('SET foreign_key_checks = 1');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('orders');
};
