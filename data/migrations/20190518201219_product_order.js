exports.up = function(knex, Promise) {
    return knex.schema.createTable('product_order', field => {
        field.increments();
        field
            .integer('order_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('orders')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        field
            .integer('product_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('products')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        field
            .integer('price_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('prices')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        field.integer('number_of_units').notNullable();
        field.integer('total').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('product_order');
};
