module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'deepuai',
        password: 'deepuai',
        database: 'deepuai'
    },
    migrations: {
      	tableName: 'migrations'
    }
}