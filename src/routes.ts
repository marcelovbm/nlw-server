import express from 'express';

import PontosDeColetaController from './controller/PontosDeColetaController';
import ItensController from './controller/ItensController'

const routes = express.Router();
const pontosDeColetaController = new PontosDeColetaController();
const itesnController = new ItensController();

/**
 * Rota responsável por retornar para o usuário
 *  se a aplicação está normal.
 * 
 * @author Marcelo Villas Bôas Magrinelli
 */
routes.get('/health', (request, response) => {
    return response.status(200).json({message: 'Ok'});
});

/**
 * Rota responsável por retornar os itens cadastrados
 * na base de dados.
 */
routes.get('/itens', itesnController.index);

routes.post('/pontos-de-coleta', pontosDeColetaController.create);
routes.get('/pontos-de-coleta/:id', pontosDeColetaController.show);
export default routes;