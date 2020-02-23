
exports.up = function(knex) {
  return knex.schema.createTable('property', (property) => {
      property.increments()
      property.integer('bedrooms')
      property.varchar('address')
      property.varchar('city')
      property.varchar('state')
      property.integer('zipcode')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('property')
};
