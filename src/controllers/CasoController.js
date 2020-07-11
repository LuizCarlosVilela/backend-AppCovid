const { create, select } = require("./MedicoController");
const connection = require('../database/connection');
const { connect } = require("../routes");

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const { nome_paciente, data_ocorrido, hora_ocorrido } = request.body;

        const { rua, bairro, cidade, uf, latitude, longitude } = request.body;


        const [local_id] = await connection('locais').insert({
            rua,
            bairro,
            cidade,
            uf,
            latitude,
            longitude
        });

        console.log("Local " + local_id);

        const [idCaso] = await connection('casos').insert({
            nome_paciente,
            data_ocorrido,
            hora_ocorrido,
            local_id,
            medico_id: id
        });

        console.log("Caso ID " + idCaso);

        response.json({ msg: "ok" })
    },
    async select(request, response) {

        const casos = await connection('casos').select('*');

        casos.forEach(async (caso, index) => {

            const { local_id } = caso;
            const [ local ] = await connection('locais').where('id', local_id).select('*');

            var newC = {
                id: caso.id,
                nome_paciente: caso.nome_paciente,
                data_ocorrido: caso.data_ocorrido,
                hora_ocorrido: caso.hora_ocorrido,
                local,
                medico_id: caso.medico_id
            }
            console.log("Index" + index);
            casos[index] = newC;
        });

        setTimeout( ()=> {
            response.json(casos);
        }, 3000)
    }
}