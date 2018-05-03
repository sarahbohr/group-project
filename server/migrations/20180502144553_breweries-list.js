exports.up = function(knex, Promise) {
  return knex.schema.createTable('breweries', (table) => {
    table.increments()
    table.text('brewery')
    table.decimal('latitude', 6)
    table.decimal('longitude', 6)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('breweries')
};
