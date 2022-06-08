//Deafult globale Variablen für Darstellung der Karte
let selected_color = "blue"
let selected_font_size = "standard"

function updateKarte() {
  // Funktionsaufruf für Daten holen
  const data = getDaten()

  // Variable für if Schlaufe Anzeige Optionen
  let checkbox_name = $('#checkbox_kantone').is(':checked')

  // if Schlaufe für die Anzeige Optionen
  if (checkbox_name === true) {
    show_name = '{point.name} '
  } else {
    show_name = ''
  }

  // Variable für if Schlaufe Anzeige Optionen
  let checkbox_nights = $('#checkbox_logiernaechte').is(':checked')

  // if Schlaufe für die Anzeige Optionen
  if (checkbox_nights === true) {
    show_value = '{point.value}'
  } else {
    show_value = ''
  }

  // if Schlaufe für die Textgrösse.
  if (selected_font_size == "standard") {
    font_size = "13px"
  } else if (selected_font_size == "small") {
    font_size = "10px"
  } else {
    font_size = "16px"
  }
  //console.log("Textgrösse: "+font_size)

  // if Schlaufe für die Textgrösse.
  if (selected_color == "blue") {
    map_color = [
      [0, '#DCDEFA'],
      [0.3, '#838AED'],
      [0.6, '#2A36E0'],
      [1, '#141D90']
    ]
  } else if (selected_color == "green") {
    map_color = [
      [0, '#BDECB6'],
      [0.3, '#49B675'],
      [0.6, '#008800'],
      [1, '#0F4336']
    ]
  } else {
    map_color = [
      [0, '#FF6961'],
      [0.3, '#FF0000'],
      [0.6, '#C4151C'],
      [1, '#880000']
    ]
  }

  // Update der Karten Parameter wie Textgrösse und Farben
  karte.update({
    colorAxis: {
      min: 74796,
      stops: map_color
    },
    series: [{
      data: data,
      name: 'Logiernächte',
      dataLabels: {
        style: {
          fontSize: font_size
        },
        enabled: true,
        format: '' + show_name + show_value
      }
    }]
  }, false)
  karte.redraw(false)

}

// Funktion für das Zurücksetzen der Filter

function resetFilter() {
  // Anpassung der Filter im HTML auf die Standard auswahl

  document.getElementById('total_origin').checked = true;
  document.getElementById('font-size_standard').checked = true;
  document.getElementById('map_color_blue').checked = true;
  document.getElementById('checkbox_kantone').checked = false;
  document.getElementById('checkbox_logiernaechte').checked = false;
  document.getElementById('range_year').value = "2005";
  setValue() // Für die Animation des Jahr Reglers
  selected_color = "blue"
  selected_font_size = "standard"

}


$('#range_year').change(function () {
  let range_year = $('#range_year').val();
  console.log("radio_Total " + range_year)
  updateKarte()
})

// Funktion für den Filter der Gästeherkunft

$('#guest_origin').change(function () {
  selected_guest_origin = $("#guest_origin :radio:checked").val()
  updateKarte()
})

// Sämtliche Funktionen für den Anzeigefilter

$('#checkbox_kantone').change(function () {
  let kantone = $('#checkbox_kantone').is(':checked')
  console.log("#checkbox_kantone " + kantone)
  updateKarte()
})

$('#checkbox_logiernaechte').change(function () {
  let logiernaechte = $('#checkbox_logiernaechte').is(':checked')
  console.log("#checkbox_logiernaechte " + logiernaechte)
  updateKarte()
})

// Funktion für den Filter der Textgrössen

$('#font_size').change(function () {
  selected_font_size = $("#font_size :radio:checked").val()
  updateKarte()
})

// Funktion für die Auswahl des Farbdesign

$('#select_color').change(function () {
  selected_color = $("#select_color :radio:checked").val()
  updateKarte()
})

// Funktion für Den Button "Filter zurücksetzen"

$('#reset_button').click(function () {
  resetFilter()
  karteAnzeigen(getDaten())
})