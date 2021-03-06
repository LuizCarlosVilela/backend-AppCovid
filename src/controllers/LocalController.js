const connection = require('../database/connection');

module.exports = {
    async select(request, response) {
        const query = await connection('locais').select('*');
        return response.json(query);
    },
    async create(request, response) {
        const { rua, bairro, cidade, uf, latitude, longitude } = request.body;

        const { id } = await connection("locais").insert({
            rua, 
            bairro, 
            cidade, 
            uf, 
            latitude, 
            longitude
        })
        return response.json({ id });
    },
    async getLocalForLat(request, response){
        const { latitude, longitude } = request.body;

        const [ local_id ] = await connection('locais').where({ latitude, longitude }).select('id');
        return response.json({ id: local_id });
    }
    
}