async function karteAnzeigen() {
    // Kartendaten von der Schweiz laden
    let topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
    ).then(response => response.json());

    const data = [
        ['ch-fr', 250], ['ch-lu', 300], ['ch-ni', 300], ['ch-vs', 420],
        ['ch-sg', 220], ['ch-ar', 220], ['ch-ti', 350], ['ch-gl', 220],
        ['ch-gr', 500], ['ch-sz', 300], ['ch-tg', 220], ['ch-sh', 220],
        ['ch-ur', 300], ['ch-zh', 370], ['ch-zg', 370], ['ch-vd', 220],
        ['ch-bl', 175], ['ch-be', 410], ['ch-bs', 175], ['ch-so', 110],
        ['ch-nw', 300], ['ch-ai', 220], ['ch-ge', 320], ['ch-ju', 150],
        ['ch-ne', 150], ['ch-ag', 110]
    ];
    const data_2005 = [['Unterkunft','Hottelerie'],
        ['Year','2005'], ['Year','2006'], ['Year','2007'], ['Year','2008'], ['Year','2009'], ['Year','2010'],
        ['ch-fr', 349496], ['ch-fr', 10],
        ['ch-lu', 1407112], 
        ['ch-ni', 268707], 
        ['ch-vs', 4201759],
        ['ch-sg', 1012368], 
        ['ch-ar', 164045], 
        ['ch-ti', 2538996], 
        ['ch-gl', 139974],
        ['ch-gr', 5569534], 
        ['ch-sz', 552396], 
        ['ch-tg', 367820], 
        ['ch-sh', 105697],
        ['ch-ur', 219753], 
        ['ch-zh', 3567970], 
        ['ch-zg', 236312], 
        ['ch-vd', 2340096],
        ['ch-bl', 206106], 
        ['ch-be', 4697253], 
        ['ch-bs', 734313], 
        ['ch-so', 300141],
        ['ch-nw', 562552], 
        ['ch-ai', 144889], 
        ['ch-ge', 2379795], 
        ['ch-ju', 74796],
        ['ch-ne', 202986], 
        ['ch-ag', 598870]
    ];
    
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
            min: 50000,
            max: 5600000,
            minColor: '#00FF00',
            maxColor: '#001000',
        },
        
        navigator : {
            enabled : false
        },

        series: [{
            data: data_2005,
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

function updateKarte() {
    // 1. Daten filtern anhand der ausgewählten Kriterien
    // 2. Neue Daten anzeigen
}

karteAnzeigen()

// Funktion für den Filter Jahr

$('#range_Jahr').change(function () {
    let range_jahr = $('#range_Jahr').val();
    console.log("range_Jahr " + range_jahr)
    updateKarte()
})

// Sämtliche Funktionen für den Filter Tourismus Regionen

$('#checkbox_Aargau-Solothurn').change(function () {
    let aargau_solothurn = $('#checkbox_Aargau-Solothurn').is(':checked')
    console.log("checkbox_Aargau-Solothurn " + aargau_solothurn)
    updateKarte()
})

$('#checkbox_Basel').change(function () {
    let basel = $('#checkbox_Basel').is(':checked')
    console.log("checkbox_Basel " + basel)
    updateKarte()
})

$('#checkbox_Bern').change(function () {
    let bern = $('#checkbox_Bern').is(':checked')
    console.log("checkbox_Bern " + bern)
    updateKarte()
})

$('#checkbox_Fribourg').change(function () {
    let fribourg = $('#checkbox_Fribourg').is(':checked')
    console.log("checkbox_Fribourg " + fribourg)
    updateKarte()
})

$('#checkbox_Genferseegebiet').change(function () {
    let genferseegebiet = $('#checkbox_Genferseegebiet').is(':checked')
    console.log("checkbox_Genferseegebiet " + genferseegebiet)
    updateKarte()
})

$('#checkbox_Graubuenden').change(function () {
    let graubuenden = $('#checkbox_Graubuenden').is(':checked')
    console.log("checkbox_Graubünden " + graubuenden)
    updateKarte()
})

$('#checkbox_Jura_Drei-Seen-Land').change(function () {
    let jura = $('#checkbox_Jura_Drei-Seen-Land').is(':checked')
    console.log("checkbox_Jura & Drei-Seen-Land " + jura)
    updateKarte()
})

$('#checkbox_Luzern-Vierwaldstaettersee').change(function () {
    let luzern = $('#checkbox_Luzern-Vierwaldstaettersee').is(':checked')
    console.log("checkbox_Luzern-Vierwaldstättersee " + luzern)
    updateKarte()
})

$('#checkbox_Ostschweiz').change(function () {
    let ostschweiz = $('#checkbox_Ostschweiz').is(':checked')
    console.log("checkbox_Ostschweiz " + ostschweiz)
    updateKarte()
})

$('#checkbox_Tessin').change(function () {
    let tessin = $('#checkbox_Tessin').is(':checked')
    console.log("checkbox_Tessin " + tessin)
    updateKarte()
})

$('#checkbox_Wallis').change(function () {
    let wallis = $('#checkbox_Wallis').is(':checked')
    console.log("checkbox_Wallis " + wallis)
    updateKarte()
})

$('#checkbox_Zuerich').change(function () {
    let zurich = $('#checkbox_Zuerich').is(':checked')
    console.log("checkbox_Zürich " + zurich)
    updateKarte()
})
/* hier weitere Event-Handler für andere Checkboxen
$('#Hotellerie').change(function () {
    let hotellerie = $('#Hotellerie').is(':checked')
    updateKarte()
})

$('#Hotellerie').change(function () {
    let hotellerie = $('#Hotellerie').is(':checked')
    updateKarte()
})
*/

/* Code für die Anzeige des ausgewählten Jahres auf dem Regler. Quelle: https://css-tricks.com/value-bubbles-for-range-inputs/ */
const
  range = document.getElementById('range_Jahr'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);