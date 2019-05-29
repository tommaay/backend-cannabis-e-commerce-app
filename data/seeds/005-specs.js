let specs = [];
for (let i = 1; i <= 140; i++) {
    switch (i % 14) {
        case 1:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1 bar`,
                    price: 1200,
                    inventory: 100,
                },
            ]);
            break;

        case 2:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `Half Oz`,
                    price: 2000,
                    inventory: 100,
                },
            ]);
            break;

        case 3:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `Half Oz`,
                    price: 4200,
                    inventory: 8,
                },
            ]);
            break;

        case 4:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 1100,
                    inventory: 100,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 6300,
                    inventory: 60,
                },
            ]);
            break;

        case 5:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 1300,
                    inventory: 100,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 9200,
                    inventory: 40,
                },
            ]);
            break;

        case 6:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 2000,
                    inventory: 30,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 14900,
                    inventory: 9,
                },
            ]);
            break;

        case 7:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1/8th`,
                    price: 2200,
                    inventory: 100,
                },
                {
                    product_id: i,
                    size: `Ounce`,
                    price: 16000,
                    inventory: 100,
                },
            ]);
            break;

        case 8:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `12 pack`,
                    price: 2700,
                    inventory: 100,
                },
            ]);
            break;

        case 9:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1/2g`,
                    price: 1900,
                    inventory: 5,
                },
            ]);
            break;

        case 10:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1/2g`,
                    price: 3000,
                    inventory: 80,
                },
            ]);
            break;

        case 11:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1g`,
                    price: 2200,
                    inventory: 100,
                },
            ]);
            break;

        case 12:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `30 ml`,
                    price: 4100,
                    inventory: 40,
                },
            ]);
            break;

        case 13:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1 battery`,
                    price: 2000,
                    inventory: 100,
                },
            ]);
            break;

        case 0:
            specs = specs.concat([
                {
                    product_id: i,
                    size: `1g`,
                    price: 2300,
                    inventory: 100,
                },
            ]);
            break;
    }
}

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('specs')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('specs').insert(specs);
        });
};
