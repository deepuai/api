const app = require('express')()
const consign = require('consign')

consign()
    .into(app)

app.listen(8080, () => {
    console.log('API is running...')
})