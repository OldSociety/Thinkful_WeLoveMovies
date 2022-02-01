const knex = require('../db/connection')

const tableName = 'reviews'

function list() {
  return knex(tableName).select('*')
}