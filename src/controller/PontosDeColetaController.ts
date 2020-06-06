import knex from '../database/connection'
import { Request, Response } from 'express';

class PontosDeColetaController {

    async index (request: Request, response: Response ) {
        const { cidade, uf, itens } = request.query;

        const itensArray = String(itens).split(',').map(item => Number(item.trim()));

        const pontos_de_coleta = await knex('pontos_de_coleta')
        .join('pontos_de_coleta_itens', 'pontos_de_coleta.id', '=', 'pontos_de_coleta_itens.id_pontos_de_coleta')
        .whereIn('pontos_de_coleta_itens.id_itens', itensArray)
        .where('pontos_de_coleta.cidade', String(cidade))
        .where('pontos_de_coleta.uf', String(uf))
        .distinct()
        .select('pontos_de_coleta.*');

        return response.status(200).json( pontos_de_coleta );

    }

    async create (request: Request, response: Response) {
        const { 
            email,
            nome, 
            rua,
            numero,
            cidade,
            uf,
            whatsapp,
            latitude,
            longitude,
            itens,
        } = request.body;
    
        const trx = await knex.transaction();
    
        const ids_inseridos = await trx('pontos_de_coleta').insert({
            imagem: 'imagem-falsa',
            email,
            nome,
            rua,
            numero,
            cidade,
            uf,
            whatsapp,
            latitude,
            longitude,
        });
    
        const id_pontos_de_coleta = ids_inseridos[0];
    
        const pontos_de_coleta_itens = itens.map((id_itens: number) => {
            return {
                id_pontos_de_coleta,
                id_itens,
            }
        });
    
        await trx('pontos_de_coleta_itens').insert(pontos_de_coleta_itens);
    
        await trx.commit();
    
        return response.sendStatus(201);
    }

    async show (request: Request, response: Response) {
        const { id } = request.params;

        const ponto_de_coleta = await knex('pontos_de_coleta').where('id', id).first();

        if (!ponto_de_coleta) {
            return response.sendStatus(404);
        } else {

            const itens = await knex('itens')
            .join('pontos_de_coleta_itens', 'itens.id', '=', 'pontos_de_coleta_itens.id_itens')
            .where('pontos_de_coleta_itens.id_pontos_de_coleta', id)
            .select('itens.titulo');

            return response.status(200).json({ ponto_de_coleta, itens });
        }
    }
}

export default PontosDeColetaController;