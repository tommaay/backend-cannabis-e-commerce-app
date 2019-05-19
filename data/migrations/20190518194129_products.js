exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', field => {
        field.increments();
        field.string('name').notNullable();
        field.string('description', 2000).notNullable();
        field.string('image').notNullable();
        field.string('thc').notNullable();
        field.string('cbd').notNullable();
        field
            .string('category')
            .unsigned()
            .notNullable()
            .references('name')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        field
            .string('type')
            .unsigned()
            .notNullable()
            .references('name')
            .inTable('types')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products');
};
