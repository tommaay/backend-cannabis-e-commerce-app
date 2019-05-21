exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('description', 2000).notNullable();
        table.string('image', 5000).notNullable();
        table.string('thc').notNullable();
        table.string('cbd').notNullable();
        table
            .integer('category')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table
            .integer('type')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('types')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products');
};
