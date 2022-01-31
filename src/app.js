if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

const moviesRouter = require("./movies/movies.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const morgan = require("morgan")

const app = express();


//Middleware
app.use(morgan("dev"))
// app.use(cors());
app.use(express.json());


//Routes
app.use("/movies", moviesRouter);

//Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;