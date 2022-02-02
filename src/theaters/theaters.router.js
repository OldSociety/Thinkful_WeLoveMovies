const router = require("express").Router({mergeParams: true});
const controller = require("./theaters.controller.js");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router
.route("/:movieId/theaters")
  .get(controller.list)
  // .put(controller.update)
  // .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(), controller.list)
  .all(methodNotAllowed);


module.exports = router;