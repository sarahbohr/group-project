exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_address', (table) => {
    table.increments()
    table.text('address')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_address')
};
