import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('pontos_de_coleta', table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('email').notNullable();
        table.string('nome').notNullable();
        table.string('rua').notNullable();
        table.decimal('numero').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('pontos_de_coleta');
}