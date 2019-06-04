exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('orders')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('orders').insert([
                {
                    user_id: 2,
                    subtotal: 3600,
                    tax_rate: 0.3,
                    tax: (3600 + 1000) * 0.3,
                    delivery: 1000,
                    total: 3600 + (3600 + 1000) * 0.3,
                },
                {
                    user_id: 1,
                    subtotal: 6000,
                    tax_rate: 0.3,
                    tax: (6000 + 1000) * 0.3,
                    delivery: 1000,
                    total: 6000 + (6000 + 1000) * 0.3,
                },
                {
                    user_id: 1,
                    subtotal: 2000,
                    tax_rate: 0.3,
                    tax: (2000 + 1000) * 0.3,
                    delivery: 1000,
                    total: 2000 + (2000 + 1000) * 0.3,
                },
                {
                    user_id: 2,
                    subtotal: 2000,
                    tax_rate: 0.3,
                    tax: (2000 + 1000) * 0.3,
                    delivery: 1000,
                    total: 2000 + (2000 + 1000) * 0.3,
                },
                {
                    user_id: 1,
                    subtotal: 3200,
                    tax_rate: 0.3,
                    tax: (3200 + 1000) * 0.3,
                    delivery: 1000,
                    total: 3200 + (3200 + 1000) * 0.3,
                },
                {
                    user_id: 2,
                    subtotal: 3200,
                    tax_rate: 0.3,
                    tax: (3200 + 1000) * 0.3,
                    delivery: 1000,
                    total: 3200 + (3200 + 1000) * 0.3,
                },
            ]);
        });
};
