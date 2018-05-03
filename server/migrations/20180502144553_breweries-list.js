exports.up = (knex, Promise) => {
  return knex.schema.createTable('breweries', (table) => {
    table.increments()
    table.text('brewery')
    table.decimal('latitude')
    table.decimal('longitude')
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('breweries')
};
