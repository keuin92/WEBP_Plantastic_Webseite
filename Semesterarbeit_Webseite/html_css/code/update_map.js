function updateKarte(year,) {
  // Basis Datenstruktur für die Map mit allen Werten auf 0.
  const data = [['ch-zh', 0], ['ch-be', 0], ['ch-lu', 0], ['ch-ur', 0], ['ch-sz', 0], ['ch-nw', 0], ['ch-ni', 0], ['ch-gl', 0], ['ch-zg', 0], ['ch-fr', 0], ['ch-so', 0], ['ch-bs', 0], ['ch-bl', 0], ['ch-sh', 0], ['ch-ar', 0], ['ch-ai', 0], ['ch-sg', 0], ['ch-gr', 0], ['ch-ag', 0], ['ch-tg', 0], ['ch-ti', 0], ['ch-vd', 0], ['ch-vs', 0], ['ch-ne', 0], ['ch-ge', 0], ['ch-ju', 0]];

  var raw_data = JSON.parse(json);
  //console.log("Test1: " + raw_data["200501"]["Total"]);
  //console.log("Test2: " + raw_data[200501]["Total"]);


  // Filterung der raw_data jen nach Auswahl auf der Webseite

  console.log("Jahr: " + year)
  //var kanton1 = "ch-zh";
  var search_str = year.toString() + "01";
  var search_int = parseInt(search_str)
  var new_table = [];
  var table_data = [];
  for (let i = 0; i < 26; i++) {
    new_table = raw_data[search_int]["Total"];
    //console.log(raw_data[search_int]["Total"]);
    search_int++
    //search = Jahr.toString() + kanton1
    table_data.push(new_table)
  }
  console.log("Resultat: " + table_data)

  // Update des data Arrays für die Karte    
  var canton = 0
  var count = 0
  for (let i = 0; i < 26; i++) {
    data[canton][1] = (table_data[count]);
    canton++
    count++
  }

  karteAnzeigen()

  async function karteAnzeigen() {

    // Kartendaten von der Schweiz laden
    let topology = await fetch(
      'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
    ).then(response => response.json());

    // Create the chart
    Highcharts.mapChart('container_map', {
      chart: {
        map: topology // Welche Karte soll gezeichnet werden? Siehe oben...
      },

      title: {
        text: '',
      },
      /*
      subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json">Switzerland</a>'
      },
      */

      /*mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },*/

      colorAxis: {
        min: 74796,
        max: 6239848,
        minColor: '#00FF00',
        maxColor: '#001000',
      },

      navigator: {
        enabled: false
      },

      series: [{
        data: data,
        /* keys: ['code_hasc', 'value'],
        joinBy: 'code_hasc', */
        name: 'Logiernächte',
        /*states: {
            hover: {
                color: '#BADA55'
            }
        },*/
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    });
  }


  // 1. Daten filtern anhand der ausgewählten Kriterien
  // 2. Neue Daten anzeigen
  // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

}
// Funktion für den Filter Jahr

$('#range_year').change(function () {
  let range_year = $('#range_year').val();
  console.log("radio_Total " + range_year)
  updateKarte(range_year)
})

// Funktion für den Filter der Gaesteherkunft

$('#radio_Total').change(function () {
  let radio_total = $('#radio_Total').is(':checked')
  console.log("radio_Total " + radio_total)
  updateKarte()
})

$('#radio_Schweiz').change(function () {
  let radio_schweiz = $('#radio_Schweiz').is(':checked')
  console.log("radio_Schweiz " + radio_schweiz)
  updateKarte()
})

$('#radio_Ausland').change(function () {
  let radio_ausland = $('#radio_Ausland').is(':checked')
  console.log("radio_Ausland " + radio_ausland)
  updateKarte()
})

// Sämtliche Funktionen für den Filter der Kantone

$('#checkbox_Aargau').change(function () {
  let aargau = $('#checkbox_Aargau').is(':checked')
  console.log("checkbox_Aargau " + aargau)
  updateKarte()
})

$('#checkbox_Appenzell_Innerrhoden').change(function () {
  let appenzell_innerrhoden = $('#checkbox_Appenzell_Innerrhoden').is(':checked')
  console.log("checkbox_Appenzell_Innerrhoden " + appenzell_innerrhoden)
  updateKarte()
})

$('#checkbox_Appenzell_Ausserrhoden').change(function () {
  let appenzell_ausserrhoden = $('#checkbox_Appenzell_Ausserrhoden').is(':checked')
  console.log("checkbox_Appenzell_Ausserrhoden " + appenzell_ausserrhoden)
  updateKarte()
})

$('#checkbox_Basel-Stadt').change(function () {
  let basel_stadt = $('#checkbox_Basel-Stadt').is(':checked')
  console.log("checkbox_Basel-Stadt " + basel_stadt)
  updateKarte()
})

$('#checkbox_Basel-Landschaft').change(function () {
  let basel_Landschaft = $('#checkbox_Basel-Landschaft').is(':checked')
  console.log("checkbox_Basel-Landschaft " + basel_Landschaft)
  updateKarte()
})

$('#checkbox_Bern').change(function () {
  let bern = $('#checkbox_Bern').is(':checked')
  console.log("checkbox_Bern " + bern)
  updateKarte()
})

$('#checkbox_Freiburg').change(function () {
  let freiburg = $('#checkbox_Freiburg').is(':checked')
  console.log("checkbox_Freiburg " + freiburg)
  updateKarte()
})

$('#checkbox_Genf').change(function () {
  let genf = $('#checkbox_Genf').is(':checked')
  console.log("checkbox_Genf " + genf)
  updateKarte()
})

$('#checkbox_Glarus').change(function () {
  let glarus = $('#checkbox_Glarus').is(':checked')
  console.log("checkbox_Glarus " + glarus)
  updateKarte()
})

$('#checkbox_Graubuenden').change(function () {
  let graubuenden = $('#checkbox_Graubuenden').is(':checked')
  console.log("checkbox_Graubünden " + graubuenden)
  updateKarte()
})

$('#checkbox_Jura').change(function () {
  let jura = $('#checkbox_Jura').is(':checked')
  console.log("checkbox_Jura " + jura)
  updateKarte()
})

$('#checkbox_Luzern').change(function () {
  let luzern = $('#checkbox_Luzern').is(':checked')
  console.log("checkbox_Luzern " + luzern)
  updateKarte()
})

$('#checkbox_Neuenburg').change(function () {
  let neuenburg = $('#checkbox_Neuenburg').is(':checked')
  console.log("checkbox_Neuenburg " + neuenburg)
  updateKarte()
})

$('#checkbox_Nidwalden').change(function () {
  let nidwalden = $('#checkbox_Nidwalden').is(':checked')
  console.log("checkbox_Nidwalden " + nidwalden)
  updateKarte()
})

$('#checkbox_Obwalden').change(function () {
  let obwalden = $('#checkbox_Obwalden').is(':checked')
  console.log("checkbox_Obwalden " + obwalden)
  updateKarte()
})

$('#checkbox_Schaffhausen').change(function () {
  let schaffhausen = $('#checkbox_Schaffhausen').is(':checked')
  console.log("checkbox_Schaffhausen " + schaffhausen)
  updateKarte()
})

$('#checkbox_Schwyz').change(function () {
  let schwyz = $('#checkbox_Schwyz').is(':checked')
  console.log("checkbox_Schwyz " + schwyz)
  updateKarte()
})

$('#checkbox_Solothurn').change(function () {
  let solothurn = $('#checkbox_Solothurn').is(':checked')
  console.log("checkbox_Solothurn " + solothurn)
  updateKarte()
})

$('#checkbox_StGallen').change(function () {
  let st_gallen = $('#checkbox_StGallen').is(':checked')
  console.log("checkbox_StGallen " + st_gallen)
  updateKarte()
})

$('#checkbox_Tessin').change(function () {
  let tessin = $('#checkbox_Tessin').is(':checked')
  console.log("checkbox_Tessin " + tessin)
  updateKarte()
})

$('#checkbox_Thurgau').change(function () {
  let thurgau = $('#checkbox_Thurgau').is(':checked')
  console.log("checkbox_Thurgau " + thurgau)
  updateKarte()
})

$('#checkbox_Uri').change(function () {
  let uri = $('#checkbox_Uri').is(':checked')
  console.log("checkbox_Uri " + uri)
  updateKarte()
})

$('#checkbox_Waadt').change(function () {
  let waadt = $('#checkbox_Waadt').is(':checked')
  console.log("checkbox_Waadt " + waadt)
  updateKarte()
})

$('#checkbox_Wallis').change(function () {
  let wallis = $('#checkbox_Wallis').is(':checked')
  console.log("checkbox_Wallis " + wallis)
  updateKarte()
})

$('#checkbox_Zug').change(function () {
  let zug = $('#checkbox_Zug').is(':checked')
  console.log("checkbox_Zug " + zug)
  updateKarte()
})

$('#checkbox_Zuerich').change(function () {
  let zurich = $('#checkbox_Zuerich').is(':checked')
  console.log("checkbox_Zuerich " + zurich)
  updateKarte()
})