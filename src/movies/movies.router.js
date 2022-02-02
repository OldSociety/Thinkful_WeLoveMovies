const router = require('express').Router()
const controller = require('./movies.controller.js')
const theatersRouter = require('../theaters/theaters.router.js')
const reviewsRouter = require('../reviews/reviews.router.js')
const methodNotAllowed = require('../errors/methodNotAllowed')

//const cors = require('cors')

router.use("/:movies/theaters", theatersRouter)
router.use("/:movieId/reviews", reviewsRouter)

router
  .route('/movies?is_showing=true')
  .get(controller.moviesShowingInTheaters)
  .all(methodNotAllowed)

router.route('/:movieId([0-9]+)').get(controller.read).all(methodNotAllowed)

router.route('/').get(controller.list).all(methodNotAllowed)

module.exports = router