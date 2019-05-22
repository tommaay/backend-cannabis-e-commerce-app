exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('orders')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('orders').insert([
                {
                    user_id: 2,
                    subtotal: 3600,
                    tax: 0.3,
                    total: 4680,
                },
                {
                    user_id: 1,
                    subtotal: 6000,
                    tax: 0.3,
                    total: 7800,
                },
                {
                    user_id: 1,
                    subtotal: 2000,
                    tax: 0.3,
                    total: 2600,
                },
                {
                    user_id: 2,
                    subtotal: 2000,
                    tax: 0.3,
                    total: 2600,
                },
                {
                    user_id: 1,
                    subtotal: 3200,
                    tax: 0.3,
                    total: 4160,
                },
                {
                    user_id: 2,
                    subtotal: 3200,
                    tax: 0.3,
                    total: 4160,
                },
            ]);
        });
};
