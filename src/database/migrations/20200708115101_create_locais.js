
exports.up = function (knex) {
    return knex.schema.createTable('locais', (table) => {
        //Id auto incremente
        table.increments();

        table.string("rua").notNullable();
        table.string("bairro").notNullable();
        table.string("cidade").notNullable();
        table.string("uf", 2).notNullable();

        table.float("latitude").notNullable();
        table.float("longitude").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('locais');
};
