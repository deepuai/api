exports.up = function(knex, Promise) {
    return knex.schema.createTable('applications', table => {
        table.increments('id').primary()
        table.string('name').notNull(),
        table.string('version').notNull().unique()
        table.float('accuracy').notNull()
        table.integer('n_accesses').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('applications')
};