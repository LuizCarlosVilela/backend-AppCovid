
exports.up = function(knex) {
    return knex.schema.createTable('casos', (table) => {
        //Id auto incremente
        table.increments();

        table.string('nome_paciente').notNullable();
        table.string('data_ocorrido').notNullable();
        table.string('hora_ocorrido').notNullable();

        table.integer("local_id").notNullable();

        table.foreign("local_id").references('id').inTable('locais');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('casos');
};