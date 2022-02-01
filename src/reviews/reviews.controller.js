const reviewsService = require('./movies.service.js')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
//const knex = require('../db/connection.js');

async function list(req, res, next) {
    reviewsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next)
}

module.exports = {
    list: asyncErrorBoundary(list),
  }