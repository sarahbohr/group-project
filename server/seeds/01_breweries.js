
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breweries').del()
    .then(function () {
      // Inserts seed entries
      return knex('breweries').insert([
        {id: 1, brewery: 'Molson-Coors', latitude: 123, longitude: 456}

      ]);
    });
};
