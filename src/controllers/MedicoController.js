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

        const doctor = await connection('medicos').where({ crm: crm}).select('*');

        const token = generateToken({ id: id })

        doctor[0].senha = undefined;

        return response.json({ token, doctor });
    },

    async login(request, response) {
        const { crm, senha } = request.body;

        const doctor = await connection('medicos').where({ crm: crm}).select('*');

        if (doctor < 1) return response.status(401).send
        ('Falha na autenticação');

        const compare = bcrypt.compareSync(senha, doctor[0].senha);

        if (!compare) return response.status(401).send('Falha na autenticação');

        doctor[0].senha = undefined;

        const token = generateToken({ id: doctor[0].id });

        response.json({
            token,
            doctor
        })
    },

    async select(request, response) {
        const query = await connection('medicos').select('*');
        return response.json(query);
    }
}