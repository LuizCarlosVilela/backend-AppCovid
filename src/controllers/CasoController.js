
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    //const { id } = request.body;

    //const { nome_paciente, data_ocorrido, hora_ocorrido } = request.body;

    //const { rua, bairro, cidade, uf, latitude, longitude } = request.body;

    //const [local_id] = await connection("locais").insert({
      //rua,
      //bairro,
      //cidade,
      //uf,
      //latitude,
      //longitude,
    //});

    await connection("casos").insert({
      nome_paciente: "Luiz Carlos",
      data_ocorrido: "06/07/2020",
      hora_ocorrido: "15:00",
      local_id: 24,
      medico_id: 2
    });

    //console.log("Caso ID " + idCaso);

    //response.json({ msg: "ok" });
  },
  async select(request, response) {
    const casos = await connection("casos").select("*");

    setTimeout(() => {
      response.json(casos);
    }, 3000);
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection("casos").where("id", id).delete();

    response.json({ msg: "Deletado" });
  },

  async updateCaso(request, response) {
    const { caso_id } = request.body;

    const { local_id } = request.body;

    const { nome_paciente, data_ocorrido, hora_ocorrido } = request.body;

    const { rua, bairro, cidade, uf, latitude, longitude } = request.body;

    await connection("locais").where("id", local_id).update({
      rua,
      bairro,
      cidade,
      uf,
      latitude,
      longitude,
    });

    await connection("casos").where("id", caso_id).update({
      nome_paciente,
      data_ocorrido,
      hora_ocorrido,
    });

    response.json({ msg: "Update feito" });
  },
};
