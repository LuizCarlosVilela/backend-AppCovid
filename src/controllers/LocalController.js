const connection = require('../database/connection');

module.exports = {
    async select(request, response) {
        const { id } = request.body;
        const query = await connection('locais').select('*').where('id' , id);
        return response.json(query);
    }
}