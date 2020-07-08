
exports.up = function(knex) {
    return knex.schema.createTable('medicos', (table) => {
        //Id auto incremente
        table.increments();

        table.string('crm').notNullable();
        table.string('senha').notNullable();

        table.string('cargo').notNullable();
        table.string('nomeCompleto').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicos');
};
