// Update with your config settings.

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/developmentDB.db3',
        },
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
        useNullAsDefault: true,

        // SQLite does not enforce foreign keys by default and this is the fix
        pool: {
            afterCreate: (connection, done) => {
                connection.run('Pragma foreign_keys = ON', done);
            },
        },
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/data/migrations',
        },
        seeds: {
            directory: __dirname + '/data/seeds',
        },
    },
};
