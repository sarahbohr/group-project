exports.up = function(knex, Promise) {
  return knex.schema.createTable('breweries', (table) => {
    table.increments()
    table.text('brewery')
    table.number('latitude')
    table.number('longitude')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('breweries')
};
