const connection = require('../database/connection');

module.exports = {
    async select(request, response) {
        const query = await connection('locais').select('*');
        return response.json(query);
    }
}