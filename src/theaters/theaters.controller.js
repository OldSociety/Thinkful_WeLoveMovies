const theatersService = require('./theaters.services.js')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
//const knex = require('../db/connection.js');

async function list(req, res, next) {
  theatersService
    .list()
    .then((data) => res.json({ data }))
    .catch(next)
}

function destroy(req, res) {
    const { theater: data } = res.locals
    res.json({ data })
  }
  
  function read(req, res) {
      const { theater: data } = res.locals
      res.json({ data })
    }

module.exports = {
    read: [asyncErrorBoundary(read)],
    list: asyncErrorBoundary(list),
    delete: [asyncErrorBoundary(destroy)]
  }
