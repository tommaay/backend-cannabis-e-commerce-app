exports.up = function(knex, Promise) {
    return knex.schema.createTable('specs', table => {
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
        table.integer('price').notNullable();
        table.integer('inventory').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('specs');
};
