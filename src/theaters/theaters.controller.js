const theatersService = require('./movies.service.js')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
//const knex = require('../db/connection.js');

async function list(req, res, next) {
    theatersService
    .list()
    .then((data) => res.json({ data }))
    .catch(next)
}

module.exports = {
    list: asyncErrorBoundary(list),
  }