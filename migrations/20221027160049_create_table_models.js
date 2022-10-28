exports.up = function(knex, Promise) {
    return knex.schema.createTable('models', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description').notNull()
        table.string('autors').notNull()
        table.string('n_params').notNull()
        table.integer('n_layers').notNull()
        table.string('size').notNull()
        table.string('created_on').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('models')
};