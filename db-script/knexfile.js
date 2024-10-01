// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host:     '127.0.0.1',
      port:     5432,
      database: 'letstalkDB',
      user:     'letstalkUSER',
      password: 'letstalkPASSWORD',
      requestTimeout: 10000,
      ssl: false,
    },
    acquireConnectionTimeout: 5000,
    pool: {
      min: 2,
      max: 10,
      createTimeoutMillis: 8000,
      acquireTimeoutMillis: 8000,
      idleTimeoutMillis: 8000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
      propagateCreateError: false
    },
    debug: true,
    migrations: {
      tableName: 'knex_letstalkdb_migrations'
    }
  },
};
