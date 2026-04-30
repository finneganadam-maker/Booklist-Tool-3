var mongoose = require('mongoose')

var buchSchema = new mongoose.Schema({
  titel: {
    type: String,
    required: [true, 'Titel ist erforderlich'],
    trim: true,
    maxlength: 200
  },
  autor: {
    type: String,
    required: [true, 'Autor ist erforderlich']
  },
  seiten: {
    type: Number,
    min: [1, 'Minimum 1 page']
  },
  gelesen: {
    type: Boolean,
    default: false
  },
  erstellt: {
    type: Date,
    default: Date.now
  }
})

var Buch = mongoose.model('Buch', buchSchema)

module.exports = Buch
