
exports.up = function(knex, Promise) {
  return knex.schema.table('taco_toppings', function(table){
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('taco_toppings', function(table){
    table.timestamps();
  });
};
