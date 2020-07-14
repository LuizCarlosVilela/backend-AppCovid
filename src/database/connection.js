const knex = require('knex');
const configuration = require ('../../knexfile');

const connection = knex(configuration.development1);

module.exports = connection;

