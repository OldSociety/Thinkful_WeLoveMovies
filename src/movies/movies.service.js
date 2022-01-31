const knex = require("../db/connection");

const tableName = "movies";

function list() {
  return knex(tableName).select();
}

function read() {
    return knex(tableName).select()
}

module.exports = {
  list,
  read,
};