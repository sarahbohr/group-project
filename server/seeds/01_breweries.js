
exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  await knex('breweries').del()
    async () => {
      // Inserts seed entries
      await knex('breweries').insert([
        {id: 1, brewery: 'Molson-Coors', latitude: 123, longitude: 456}
      ]);
    }
};
