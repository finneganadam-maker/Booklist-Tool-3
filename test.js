var assert = require('assert')

// Test 1: gelesen-Feld wird richtig konvertiert
var body1 = { gelesen: 'on' }
var gelesen1 = body1.gelesen === 'on' ? true : false
assert.strictEqual(gelesen1, true, 'gelesen sollte true sein wenn "on"')

// Test 2: gelesen ist false wenn nicht angekreuzt
var body2 = {}
var gelesen2 = body2.gelesen === 'on' ? true : false
assert.strictEqual(gelesen2, false, 'gelesen sollte false sein wenn nicht gesetzt')

// Test 3: Titel darf nicht leer sein
var titel = ''
assert.strictEqual(titel.trim().length === 0, true, 'leerer Titel sollte erkannt werden')

// Test 4: Seitenanzahl muss mindestens 1 sein
var seiten = 0
assert.strictEqual(seiten >= 1, false, 'Seitenanzahl unter 1 sollte ungültig sein')

console.log('Alle Tests bestanden.')
