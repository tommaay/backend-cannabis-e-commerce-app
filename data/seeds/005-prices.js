let prices = [];
for (let i = 1; i <= 140; i++) {
    switch (i % 13) {
        case 1:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1 bar`,
                    price: 1200,
                },
            ]);
            break;

        case 2:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `Half Oz`,
                    price: 2000,
                },
            ]);
            break;

        case 3:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `Half Oz`,
                    price: 4200,
                },
            ]);
            break;

        case 4:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 1100,
                },
                {
                    product_id: i,
                    size: `Ouncce`,
                    price: 6300,
                },
            ]);
            break;

        case 5:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 1300,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 9200,
                },
            ]);
            break;

        case 6:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 2000,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 14900,
                },
            ]);
            break;

        case 7:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 2200,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 16000,
                },
            ]);
            break;

        case 8:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `12 pack`,
                    price: 2700,
                },
            ]);
            break;

        case 9:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1/2g`,
                    price: 1900,
                },
            ]);
            break;

        case 10:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1/2g`,
                    price: 3000,
                },
            ]);
            break;

        case 11:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1g`,
                    price: 2200,
                },
            ]);
            break;

        case 12:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `30 ml`,
                    price: 4100,
                },
            ]);
            break;

        case 13:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1 battery`,
                    price: 2000,
                },
            ]);
            break;

        case 0:
            prices = prices.concat([
                {
                    product_id: i,
                    size: `1g`,
                    price: 2300,
                },
            ]);
            break;
    }
}

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('prices')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('prices').insert(prices);
        });
};
