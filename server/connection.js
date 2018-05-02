const environment = process.env.NODE_ENV || 'development'
const configs = require('./knexfile')
const dbConfig = configs[environment]
const knex = require('knex')
const connection = knex(dbConfig)

module.exports = connection;
