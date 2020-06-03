import express from 'express';

const app = express();

app.get('/users', (request, response) => {
   response.status(200).json({message: 'Hello World'}); 
});

app.listen(8080);