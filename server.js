const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('./static'))
app.use('/users', require('./routes/users'))

app.listen(3000, () => console.log('App listening on 3000'))
