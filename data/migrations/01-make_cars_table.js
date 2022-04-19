exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id')
    tbl.string('vin', 13).notNullible().unique()
    tbl.string('make', 128).notNullible()
    tbl.string('model', 128).notNullible()
    tbl.numeric('mileage').notNullible()
    tbl.string('title', 128)
    tbl.string('transmission', 128)
    
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
