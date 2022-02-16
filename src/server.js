const express = require('express')
const cors = require('cors')

const { PORT = 5000 } = process.env;

const app = require("./app");
const knex = require("./db/connection");

router.get('/', cors(), (req, res) => {
  res.json({ message: 'Hello Heroku!' });
})

app.use('/', router);

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
