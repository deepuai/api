exports.up = function(knex, Promise) {
    return knex.schema.createTable('applications', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('version').notNull().unique()
        table.float('accuracy').notNull()
        table.integer('n_accesses').notNull().defaultTo(0)
        table.integer('parent_id').references('id').inTable('applications')
        table.integer('model_id').references('id').inTable('models').notNull()
        table.integer('dataset_id').references('id').inTable('datasets').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('applications')
};