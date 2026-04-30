var express = require('express')
var router = express.Router()
var Buch = require('../models/Buch')

// get all books
router.get('/', function(req, res) {
  console.log('Startseite aufgerufen')
  Buch.find().then(function(buecher) {
      console.log('Bücher gefunden:', buecher.length)
      res.render('index', { buecher: buecher })
  }).catch(function(err) {
    console.log(err)
    res.send('Fehler beim Laden der Bücher')
  })
})

router.get('/neu', function(req, res) {
  res.render('neu')
})

// neues buch speichern
router.post('/buch', function(req, res) {
  console.log(req.body)

  var neuesBuch = new Buch({
    titel: req.body.titel,
    autor: req.body.autor,
    seiten: req.body.seiten,
    gelesen: req.body.gelesen === 'on' ? true : false
  })

  neuesBuch.save().then(function() {
    res.redirect('/')
  })
  .catch(function(err) {
      console.log('Fehler beim Speichern:', err)
      if (err.name === 'ValidationError') {
        res.render('neu', { errors: err.errors, buch: req.body })
      } else {
        res.send('Fehler beim Speichern')
      }
  })
})

router.get('/buch/:id', function(req, res) {
  var id = req.params.id

  Buch.findById(id)
    .then(function(buch) {
      if (!buch) {
        res.send('Buch nicht gefunden')
        return
      }
      res.render('detail', { buch: buch })
    }).catch(function(err) {
      console.log(err)
      res.send('Fehler')
    })
})

router.get('/buch/:id/bearbeiten', function(req, res) {
  var id = req.params.id

  Buch.findById(id)
    .then(function(buch) {
      if (!buch) {
        res.send('Nicht gefunden')
        return
      }
      res.render('bearbeiten', { buch: buch })
    }).catch(function(err) {
      console.log(err)
      res.send('Fehler')
    })
})

router.post('/buch/:id/bearbeiten', function(req, res) {
  var id = req.params.id
  console.log('update route aufgerufen')

  Buch.findByIdAndUpdate(id, {
    titel: req.body.titel,
    autor: req.body.autor,
    seiten: req.body.seiten,
    gelesen: req.body.gelesen === 'on' ? true : false
  }, { runValidators: true }).then(function() {
      console.log('gespeichert')
      res.redirect('/')
  })
  .catch(function(err) {
    console.log('Fehler beim Aktualisieren', err)
    if (err.name === 'ValidationError') {
      var buchDaten = req.body
      buchDaten._id = id
      res.render('bearbeiten', { buch: buchDaten, errors: err.errors })
    } else {
      res.send('Fehler')
    }
  })
})

router.post('/buch/:id/loeschen', function(req, res) {
  var id = req.params.id
  console.log('löschen:', id)

  Buch.findByIdAndDelete(id)
    .then(function() {
        res.redirect('/')
    })
    .catch(function(err) {
      console.log(err)
      res.send('Fehler beim Löschen')
    })
})

module.exports = router
