exports.up = function(knex, Promise) {
    return knex.schema.createTable('product_prices', table => {
        table.increments();
        table
            .integer('product_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('products')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table.string('size').notNullable();
        table.integer('cost').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('product_prices');
};
