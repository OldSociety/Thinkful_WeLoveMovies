if (process.env.DEVELOPMENT_DATABASE_URL) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// app routers for routes
const moviesRouter = require("./movies/movies.router")
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

// middleware
app.use(express.json())
app.use(cors())

// establish app routes
app.use("/movies", moviesRouter)
app.use("/reviews", reviewsRouter)
app.use("/theaters", theatersRouter)

//error handling
app.use(notFound)
app.use(errorHandler)

module.exports = app;