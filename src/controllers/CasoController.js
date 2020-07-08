const { create, select } = require("./MedicoController");
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { crm, senha } = request.body;

        const { nome_paciente, data_ocorrido, hora_ocorrido } = request.body;

        const { rua, bairro, cidade, uf, latitude, longitude } = request.body;


        const [ local_id ] = await connection('locais').insert({
            rua,
            bairro,
            cidade,
            uf,
            latitude,
            longitude
        });

        console.log("Local "+local_id);

        const [ queryId ] = await connection('medicos').where({ crm: crm, senha: senha }).select("id");
        let medico_id = await queryId.id;

        console.log("Id médico "+medico_id);

        const [ idCaso ] = await connection('casos').insert({
            nome_paciente,
            data_ocorrido,
            hora_ocorrido,
            local_id,
            medico_id
        });

        console.log("Caso ID "+ idCaso);

        response.json({ msg: "ok"})
    },
    async select(request, response) {

        const casos = await connection('casos').select('*');

        response.json(casos);
    }
}