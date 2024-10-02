import knex from 'knex';
import knexfile from './knexfile.js';

// TODO: in prod use DI to create knex instance so db access can be mocked fro tests
// TODO: in prod don't access knexfile.development directally but decide which config to use
export const db = knex(knexfile.development);
