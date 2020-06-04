import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('pontos_de_coleta_itens', table => {
        table.increments('id').primary();
        table.integer('id_pontos_de_coleta').notNullable().references('id').inTable('pontos_de_coleta');
        table.integer('id_itens').notNullable().references('id').inTable('itens');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('pontos_de_coleta_itens');
}