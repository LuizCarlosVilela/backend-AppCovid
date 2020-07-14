// Update with your config settings.

module.exports = {

  development1: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: "true",
  },

  development: {
    client: 'pg',
    connection: 'postgres://wwgfhaeebomxjj:1b657dae08f0b212d70916ecc4a8aa495f8b98ee5d21f408c3f175ceebc6af77@ec2-107-22-7-9.compute-1.amazonaws.com:5432/db02tove2787qs',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: "true",
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
