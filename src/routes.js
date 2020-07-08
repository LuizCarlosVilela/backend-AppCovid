const connection = require('./database/connection');

const express = require('express');
const routes = express.Router();

const MedicoController = require('./controllers/MedicoController');
const CasoController = require('./controllers//CasoController');
const LocalController = require('./controllers/LocalController');

routes.get('/', (request, response) => {
    return response.send('Vá para a rota /casos para ver os casos');
});

//Casos
routes.post('/create_caso', CasoController.create);
routes.get('/casos', CasoController.select);

//Medicos
routes.post('/create_medico', MedicoController.create);
routes.get('/medicos', MedicoController.select);

//Local
routes.get('/locais', LocalController.select);

module.exports = routes;