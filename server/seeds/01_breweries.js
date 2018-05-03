
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breweries').del()
    .then(function () {
      // Inserts seed entries
      return knex('breweries').insert([
        {
          id: 1,
          brewery: 'Denver Chophouse & Brewery',
          latitude: 39.75,
          longitude: -104.87
        },
        {
          id: 2,
          brewery: 'Denver Downtown',
          latitude: 39.74,
          longitude: -105.76
        },
        {
          id: 3,
          brewery: 'Main Brewery',
          latitude: 39.75,
          longitude: -104.75
        },
        {
          id: 4,
          brewery: 'Denver Beer Company',
          latitude: 39.75,
          longitude: -105.00
        },
        {
          id: 5,
          brewery: 'Jagged Mountain Brewery',
          latitude: 39.75,
          longitude: -104.99
        },
        {
          id: 6,
          brewery: 'Wynkoop Brewery',
          latitude: 39.756543,
          longitude: -104.545435
        },
        {
          id: 7,
          brewery: 'Dixons Downtown Brewery',
          latitude: 34.546575,
          longitude: -103.347685
        },
        {
          id: 8,
          brewery: 'Rock Bottom Brewery',
          latitude: 32.543243,
          longitude: -105.324646
        },
        {
          id: 9,
          brewery: 'The Doctors Inn',
          latitude: 33.540091,
          longitude: -105.652122
        },
        {
          id: 10,
          brewery: 'The Broken Morty',
          latitude: 34.541112,
          longitude: -105.432221
        }
      ]);
    });
};
