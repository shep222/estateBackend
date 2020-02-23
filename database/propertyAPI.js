const db = require('./knex')

module.exports = {
  getProperty: () => db('property'),
  createProperty: (newItem) => db('property').insert(newItem),
  editProperty: (id, newItem) => db('property').where('id', id).update(newItem, 'id'),
  getSingleProperty: (id) => db('property').where('id', id),
  deleteProperty: (id) => db('property').where('id', id).del().returning('id')
}
