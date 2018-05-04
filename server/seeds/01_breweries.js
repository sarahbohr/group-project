
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breweries').del()
    .then(function () {
      // Inserts seed entries
      return knex('breweries').insert([
        {
          id: 1,
          brewery: 'Denver Chophouse & Brewery',
          latitude: 39.757421,
          longitude: -105.01
        },
        {
          id: 2,
          brewery: 'Denver Downtown',
          latitude: 39.754432,
          longitude: -105.02
        },
        {
          id: 3,
          brewery: 'Main Brewery',
          latitude: 39.756933,
          longitude: -105.03
        },
        {
          id: 4,
          brewery: 'Denver Beer Company',
          latitude: 39.756549,
          longitude: -105.04
        },
        {
          id: 5,
          brewery: 'Jagged Mountain Brewery',
          latitude: 39.754789,
          longitude: -105.05
        },
        {
          id: 6,
          brewery: 'Wynkoop Brewery',
          latitude: 39.753245,
          longitude: -105.06
        },
        {
          id: 7,
          brewery: 'Dixons Downtown Brewery',
          latitude: 39.756521,
          longitude: -105.07
        },
        {
          id: 8,
          brewery: 'Rock Bottom Brewery',
          latitude: 39.757453,
          longitude: -105.08
        },
        {
          id: 9,
          brewery: 'The Doctors Inn',
          latitude: 39.752451,
          longitude: -105.09
        },
        {
          id: 10,
          brewery: 'The Broken Morty',
          latitude: 39.751155,
          longitude: -105.10
        }
      ]);
    });
};
