
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_address').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_address').insert([
        {id: 1, address: 'HELL'},

      ]);
    });
};
