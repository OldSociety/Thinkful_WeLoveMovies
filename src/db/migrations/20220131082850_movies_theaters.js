
exports.up = function(knex) {
    return knex.schema.createTable('movies', (table) => {
        table.foreign('movie_id')   //movie_id: (Primary Key) A unique ID for the movie.
        table.foreign("theater_id")
        table.boolean("is_showing")
        table.timestamps(true, true) // Adds created_at and updated_at columns
      })
};

exports.down = function(knex) {
  
};
