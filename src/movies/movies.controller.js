const moviesService = require('./movies.service.js')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
//const knex = require('../db/connection.js');

async function list(req, res, next) {
  moviesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next)
}

async function moviesShowingInTheaters(req, res, next) {
  res.json({ data: await moviesService.moviesShowingInTheaters() })
}

function movieExists(req, res, next) {
  moviesService
    .read(req.params.movieId)
    .then((movie) => {
      if (movie) {
        res.locals.movie = movie
        return next()
      }
      next({ status: 404, message: `Movie cannot be found.` })
    })
    .catch(next)
}

function read(req, res) {
  const { movie: data } = res.locals
  res.json({ data })
}

module.exports = {
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  list: asyncErrorBoundary(list),
  moviesShowingInTheaters: asyncErrorBoundary(moviesShowingInTheaters),
}
