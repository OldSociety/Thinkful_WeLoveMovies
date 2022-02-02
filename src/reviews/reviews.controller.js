const reviewsService = require('./reviews.services')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
//const knex = require('../db/connection.js');



async function list(req, res, next) {
  reviewsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next)
}

function reviewExists(req, res, next) {
    reviewsService
      .read(req.params.movieId)
      .then((review) => {
        if (review) {
          res.locals.review = review
          return next()
        }
        next({ status: 404, message: `Review cannot be found.` })
      })
      .catch(next)
  }

function destroy(req, res) {
  const { review: data } = res.locals
  res.json({ data })
}

function read(req, res) {
    const { review: data } = res.locals
    res.json({ data })
  }

module.exports = {
  read: [reviewExists, asyncErrorBoundary(read)],
  list: asyncErrorBoundary(list),
  delete: [reviewExists, asyncErrorBoundary(destroy)]
}
