const knex = require('../db/connection')

const tableName = 'movies'

function list() {
  return knex(tableName).select('*')
}

async function moviesShowingInTheaters() {
  return knex('movies as m').join(
    'movies_theaters as mt',
    'm.movie_id',
    'mt.movie_id'
  ).select("m.*", "mt.*").where({is_showing: true})
}

function read(movie_id) {
  return knex(tableName).select("*").where({movie_id}).first();
}

module.exports = {
  read,
  list,
  moviesShowingInTheaters,
}
