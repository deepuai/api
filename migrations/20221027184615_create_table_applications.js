exports.up = function(knex, Promise) {
    return knex.schema.createTable('applications', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('version').notNull()
        table.float('accuracy')
        table.integer('n_accesses').notNull().defaultTo(0)
        table.jsonb('classes')
        table.string('status').defaultTo("WAITING")
        table.integer('parent_id').references('id').inTable('applications')
        table.integer('model_id').references('id').inTable('models').notNull()
        table.integer('dataset_id').references('id').inTable('datasets')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('applications')
};