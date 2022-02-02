const router = require('express').Router({ mergeParams: true })
const controller = require('./reviews.controller.js')
const methodNotAllowed = require('../errors/methodNotAllowed')
const cors = require('cors')

router
  .route('/:movieId([0-9]+)/reviews/:reviewId')
  .get(controller.read)
  // .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)

router
  .route('/:movieId([0-9]+)/reviews')
  .get(controller.read)
  // .put(controller.update)
  // .delete(controller.delete)
  .all(methodNotAllowed)

router.route('/').get(cors(), controller.list).all(methodNotAllowed)

module.exports = router
