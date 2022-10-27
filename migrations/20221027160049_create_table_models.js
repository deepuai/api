exports.up = function(knex, Promise) {
    return knex.schema.createTable('models', table => {
        table.increments('id').primary()
        table.string('name').notNull(),
        table.string('n_params').notNull()
        table.integer('n_layers').notNull()
        table.string('size').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('models')
};