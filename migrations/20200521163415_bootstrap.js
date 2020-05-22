
exports.up = async function(knex) {
  await knex.schema.createTable("dogs", (table) => {
      table.increments("id");
      table.text("breed").notNullable();
      table.text("name").notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("dogs");
};
