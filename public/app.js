console.log('script geladen')

function loeschenBestaetigen() {
  var antwort = confirm('Bist du sicher dass du das Buch loeschen willst?')
  return antwort
}

// suche / filter
function filterBuecher() {
  var suchtext = document.getElementById('suchfeld').value.toLowerCase()
  console.log('Suche:', suchtext)

  var eintraege = document.getElementsByClassName('buch-eintrag')

  for (var i = 0; i < eintraege.length; i++) {
    var titel = eintraege[i].getElementsByClassName('buch-titel')[0].innerText.toLowerCase()
    var autor = eintraege[i].getElementsByClassName('buch-autor')[0].innerText.toLowerCase()

    if (titel.includes(suchtext) || autor.includes(suchtext)) {
      eintraege[i].style.display = ''
    } else {
      eintraege[i].style.display = 'none'
    }
  }
}

// zeichen zaehlen fuer den titel
var titelInput = document.getElementById('titel-input')

if (titelInput != null) {
  titelInput.addEventListener('keyup', function() {
    var laenge = titelInput.value.length
    document.getElementById('zeichen-anzahl').innerText = laenge + ' / 200 Zeichen'
  })
}

console.log('fertig')
