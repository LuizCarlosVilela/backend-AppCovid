const connection = require('./database/connection');

const express = require('express');
const routes = express.Router();

const MedicoController = require('./controllers/MedicoController');
const CasoController = require('./controllers//CasoController');
const LocalController = require('./controllers/LocalController');

const authMiddleware = require('./auth');

routes.get('/', (request, response) => {
    return response.send('Vá para a rota /casos para ver os casos');
});

//Login
routes.post('/login', MedicoController.login);

//Casos
routes.post('/create_caso', CasoController.create);
routes.get('/casos', CasoController.select);

routes.delete('/delete_caso/:id', CasoController.delete);
routes.put('/update_caso', CasoController.updateCaso);

//Medicos
routes.post('/create_medico', MedicoController.create);
routes.get('/medicos', MedicoController.select);

//Local
routes.get('/locais', LocalController.select);
routes.post('/local_create', LocalController.create);
routes.post('/localForLat', LocalController.getLocalForLat);

module.exports = routes;