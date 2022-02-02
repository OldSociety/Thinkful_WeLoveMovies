const knex = require('../db/connection')
const mapProperties = require('../utils/map-properties')

const addMovie = mapProperties({
  movie_id: 'movies.movie_id',
  title: 'movies.title',
  runtime_in_minutes: 'movies.runtime_in_minutes',
  rating: 'movies.rating',
  description: 'movies.description',
  image_url: 'movies.image_url',
  created_at: 'movies.created_at',
  updated_at: 'movies.updated_at',
  is_showing: 'movies.is_showing',
  theater_id: 'movies.theater_id',
})

function list() {
  return knex('movies as t')
    // .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
    // .join('movies as m', 'm.movie_id', 'mt.movie_id')
    .select('t.*')
    .then((data) => data.map(addMovie))
}

function destroy() {
  // const {reviewId} = req.params
  // const index = reviews.findIndex((review) => review.id === Number(reviewId))
  // const deleteReviews = reviews.splice(index, 1)
  // res.sendStatus(204)
}

function read(movie_id) {
  //   return knex('movies as m')
  //     .join('theaters as t', 'm.movies_id', 't.movies_id')
  //     .select('m.*', 't.*')
  //     .where({ 'm.movies_id': movie_id })
  //     .first()
  //     .then((data)=>data.map(addMovie))
}

module.exports = {
  list,
  read,
  destroy,
}
