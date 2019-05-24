exports.up = function(knex, Promise) {
    return knex.schema.createTable('product_orders', table => {
        table.increments();
        table
            .integer('order_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('orders')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table
            .integer('product_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('products')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table
            .integer('spec_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('specs')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table.integer('quantity').notNullable();
        table.integer('total').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('product_orders');
};
