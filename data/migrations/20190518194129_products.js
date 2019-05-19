exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('description', 2000).notNullable();
        table.string('image').notNullable();
        table.string('thc').notNullable();
        table.string('cbd').notNullable();
        table
            .string('category')
            .unsigned()
            .notNullable()
            .references('name')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table
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
