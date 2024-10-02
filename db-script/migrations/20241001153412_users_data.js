export function up(knex) {
    // NOTE: when you insert multiple records pass it as array inside `insert()`
    return knex('users')
        .insert([{ email: "devangverma403@gmal.com", password: 'hello'}, 
            { email: "ayush297@gmal.com", password: 'hello'}, 
            { email: "hello@gmal.com", password: 'hello'}]);
};

export function down(knex) {};
