exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('types')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('types').insert([
                { name: 'Hybrid' },
                { name: 'Sativa' },
                { name: 'Indica' },
                { name: 'CBD' },
                { name: 'Accessories' },
            ]);
        });
};
