import Knex from "knex";

export async function seed(knex: Knex){
    await knex('itens').insert([
        {imagem: 'lampadas.svg', titulo: 'Lâmpadas'},
        {imagem: 'baterias.svg', titulo: 'Pilhas e Baterias'},
        {imagem: 'papeis-papelao.svg', titulo: 'Papéis e Papelão'},
        {imagem: 'eletronicos.svg', titulo: 'Resíduos Eletrônicos'},
        {imagem: 'organicos.svg', titulo: 'Resíduos Orgânicos'},
        {imagem: 'oleo.svg', titulo: 'Óleo de Cozinha'},
    ]);
}