const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function generateToken(params = {}) {
    return jwt.sign(params, '827a556af6c4d7134f275d76e031cb7a', {});
}

module.exports = {
    async create(request, response) {
        const { crm, senha, cargo, nomeCompleto } = request.body;

        const hash = bcrypt.hashSync(senha, 10);

        const id = await connection('medicos').insert({
            crm,
            senha: hash,
            cargo,
            nomeCompleto
        });

        const token = generateToken({ id: id })

        return response.json({ token, id });
    },
    async select(request, response) {
        const query = await connection('medicos').select('*');
        return response.json(query);
    }
}