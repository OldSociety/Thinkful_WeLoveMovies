
exports.up = function(knex) {
    return knex.schema.createTable('movies', (table) => {
        table.increments('review_id').primary()   //movie_id: (Primary Key) A unique ID for the movie.
        table.text('content')
        table.integer('score')
        table.foreign('critic_id')
        table.foreign('movie_id')
        table.timestamps(true, true) // Adds created_at and updated_at columns
      })
};

exports.down = function(knex) {
  
};
