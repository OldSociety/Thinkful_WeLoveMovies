const knex = require('../db/connection')

const tableName = 'theaters'

function list() {
  return knex(tableName).select('*')
}