exports.up = function (knex, Promise) {
  return knex.schema.createTable("datasets", (table) => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.integer("size").notNull();
    table.integer("n_images").notNull();
    table.integer("n_classes").notNull();
    table.jsonb("classes").notNull();
    table.jsonb("images").notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("datasets");
};
