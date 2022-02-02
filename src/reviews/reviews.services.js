const knex = require('../db/connection')
const mapProperties = require('../utils/map-properties')

const addCritic = mapProperties({
  critic_id: 'critic.critic_id',
  preferred_name: 'critic.preferred_name',
  surname: 'critic.surname',
  organization_name: 'critic.organization_name',
  created_at: 'critic.created_at',
  updated_at: 'critic.updated_at',
})

function list() {
  return knex('reviews as r')
    .join('critics as c', 'r.critic_id', 'c.critic_id')
    .select('r.*', 'c.*')
    .then((data)=>data.map(addCritic))
}

function destroy() {
    const {reviewId} = req.params
    const index = reviews.findIndex((review) => review.id === Number(reviewId))
    const deleteReviews = reviews.splice(index, 1)
    res.sendStatus(204)
}

function read(critic_id) {
  return knex('reviews as r')
    .join('critics as c', 'r.critic_id', 'c.critic_id')
    .select('r.*', 'c.*')
    .where({ 'c.critic_id': critic_id })
    .first()
    .then((data)=>data.map(addCritic))
}


module.exports = {
  list,
  read,
  destroy
}
