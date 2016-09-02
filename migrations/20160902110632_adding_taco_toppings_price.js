
exports.up = function(knex, Promise) {
  return knex.schema.table('taco_toppings', function(table){
    table.integer('price_in_cents');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('taco_toppings', function(table){
    table.dropColumn('price_in_cents');
  })
};
