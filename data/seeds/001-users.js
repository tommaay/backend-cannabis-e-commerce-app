const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                {
                    firstname: 'Admin',
                    lastname: 'One',
                    email: 'admin@test.com',
                    password: bcrypt.hashSync('password', 11),
                    phone: 5552227777,
                    zipcode: 95123,
                    birthday: new Date(1986, 02, 14),
                    is_admin: true,
                },
                {
                    firstname: 'Customer',
                    lastname: 'One',
                    email: 'customer@test.com',
                    password: bcrypt.hashSync('password', 11),
                    phone: 2225557777,
                    zipcode: 95133,
                    birthday: new Date(1990, 07, 24),
                    is_admin: false,
                },
            ]);
        });
};
