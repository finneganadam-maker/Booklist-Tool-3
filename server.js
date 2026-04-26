require('dotenv').config()
var express = require('express')
var mongoose = require('mongoose')
var app = express()

var PORT = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// connect to database
mongoose.connect(process.env.MONGODB_URI)
  .then(function() {
    console.log('MongoDB verbunden!')
  })
  .catch(function(err) {
    console.log('Fehler:', err)
  })

var buchRoutes = require('./routes/buecher')
app.use(buchRoutes)

app.listen(PORT, function() {
  console.log('Server läuft auf http://localhost:' + PORT)
})
