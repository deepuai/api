const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

app.db = db

consign()
    .include('./config/middlewares.js')
    .include('./src/validations.js')
    .then('./src')
    .then('./config/routes.js')
    .into(app)

app.listen(8080, () => {
    console.log('API is running on localhost:8080')
})