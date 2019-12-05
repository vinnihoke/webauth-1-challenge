
exports.seed = function(knex) {
  return knex('users').insert([
    { id: 1, name: "Name", password: "Test" }
  ])
};
