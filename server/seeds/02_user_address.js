
exports.seed = async(knex, Promise) => {
  // Deletes ALL existing entries
  await knex('user_address').del()
    async () => {
      // Inserts seed entries
      await knex('user_address').insert([
        {id: 1, address: 'HELL'},
      ]);
    }
};
