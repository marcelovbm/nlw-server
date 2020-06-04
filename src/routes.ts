import express from 'express';

const routes = express.Router();

routes.get('/health', (request, response) => {
    return response.status(200).json({message: 'Ok'});
});

export default routes;