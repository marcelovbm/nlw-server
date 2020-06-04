import knex from '../database/connection';
import { Request, Response } from 'express';

class ItensController {
    async index (request: Request, response: Response) {
        const itens = await knex('itens').select('*');
    
        const itensSerelizados = itens.map(item => {
            return {
                id: item.id,
                titulo: item.titulo,
                url_imagem: `http://localhost:8080/uploads/${item.imagem}`,
            };
        });
        return response.json(itensSerelizados);
    }
}

export default ItensController