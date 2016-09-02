
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('taco_toppings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('taco_toppings').insert({
          name: 'hot sauce',
          price_in_cents: 50
        }),
        knex('taco_toppings').insert({
          name: 'jalapeños',
          price_in_cents: 10
        }),
        knex('taco_toppings').insert({
          name: 'guacamole',
          price_in_cents: 250,
        })
      ]);
    });
};
