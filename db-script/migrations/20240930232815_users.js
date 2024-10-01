/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    knex.schema.createTable('users', table => {
        table.uuid('id').unique().notNullable().defaultTo(knex.fn.uuid());
        table.string('email').primary().notNullable();
        table.string('password').notNullable();
        table.string('created_on').notNullable().defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  knex.schema.dropSchemaIfExists('users');
};
