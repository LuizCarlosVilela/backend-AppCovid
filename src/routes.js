const express = require('express');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/create_local', async (request, response) => {
    const { rua, bairro, cidade, uf, latitude, longitude } = request.body;
    console.log(rua);

    await connection('locais').insert({
        rua,
        bairro,
        cidade,
        uf,
        latitude,
        longitude
    })
    return response.json({ msg: "ok"});
});

routes.get('/locais', async (request, response) => {
    const query = await connection.queryBuilder().select('*').from('locais');
    
    response.json(query);
})
module.exports = routes;