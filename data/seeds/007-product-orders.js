exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('product_orders')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('product_orders').insert([
                {
                    product_id: 1,
                    spec_id: 1,
                    order_id: 1,
                    quantity: 3,
                    total: 3600,
                },
                {
                    product_id: 1,
                    spec_id: 1,
                    order_id: 2,
                    quantity: 5,
                    total: 6000,
                },
                {
                    product_id: 2,
                    spec_id: 2,
                    order_id: 3,
                    quantity: 1,
                    total: 2000,
                },
                {
                    product_id: 2,
                    spec_id: 2,
                    order_id: 4,
                    quantity: 1,
                    total: 2000,
                },
                {
                    product_id: 1,
                    spec_id: 1,
                    order_id: 5,
                    quantity: 1,
                    total: 1200,
                },
                {
                    product_id: 2,
                    spec_id: 2,
                    order_id: 5,
                    quantity: 1,
                    total: 2000,
                },
                {
                    product_id: 1,
                    spec_id: 1,
                    order_id: 6,
                    quantity: 1,
                    total: 1200,
                },
                {
                    product_id: 2,
                    spec_id: 2,
                    order_id: 6,
                    quantity: 1,
                    total: 2000,
                },
            ]);
        });
};
