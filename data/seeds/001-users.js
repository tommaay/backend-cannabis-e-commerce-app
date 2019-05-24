const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                {
                    firstname: 'Admin',
                    lastname: 'One',
                    email: 'admin@test.com',
                    password: bcrypt.hashSync('password', 11),
                    phone: '555-222-7777',
                    zipcode: 95123,
                    birthday: new Date(1986, 02, 14),
                    is_admin: true,
                },
                {
                    firstname: 'Customer',
                    lastname: 'One',
                    email: 'customer@test.com',
                    password: bcrypt.hashSync('password', 11),
                    phone: '222-555-7777',
                    zipcode: 95133,
                    birthday: new Date(1990, 07, 24),
                    is_admin: false,
                },
            ]);
        });
};
