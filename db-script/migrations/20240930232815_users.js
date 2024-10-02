export function up(knex) {
    return knex.schema.createTable('users', table => {
        table.uuid('id').unique().notNullable().defaultTo(knex.fn.uuid());
        table.string('email').primary().notNullable();
        table.string('password').notNullable();
        table.timestamps(true, true);
    });
};

export function down(knex) {
  return knex.schema.dropTable('users');
};
