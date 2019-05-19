exports.up = function(knex, Promise) {
    return knex.schema.createTable('prices', field => {
        field.increments();
        field
            .integer('product_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('products')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        field.string('size').notNullable();
        field.integer('cost').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('prices');
};
