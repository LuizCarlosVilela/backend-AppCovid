const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { crm, senha, cargo, nomeCompleto } = request.body;

        const id = await connection('medicos').insert({
            crm,
            senha,
            cargo,
            nomeCompleto
        });
        return response.json({ msg: "ok", id });
    },
    async select(request, response) {
        const query = await connection('medicos').select('*');
        return response.json(query);
    }
}