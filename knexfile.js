// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'heroku_with_postgress'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?sslmode=require',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
