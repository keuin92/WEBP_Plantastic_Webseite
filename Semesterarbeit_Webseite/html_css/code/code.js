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

    const data_2005 = [
        ['ch-fr', 349496],
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

        navigator: {
            enabled: false
        },

        series: [{
            data: data_2005,
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
    let appenzell_innerhoden = $('#checkbox_Appenzell_Innerrhoden').is(':checked')
    console.log("checkbox_Appenzell_Innerrhoden " + appenzell_innerhoden)
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
    setValue = () => {
        const
            newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
            newPosition = 10 - (newValue * 0.2);
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);