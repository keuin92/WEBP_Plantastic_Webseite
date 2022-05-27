// Default globale Variable für das erzeugen der Karte
var karte;

async function karteAnzeigen(data) {

    // Kartendaten von der Schweiz laden
    let topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
    ).then(response => response.json());

    // Variable für Textgrösse und Farverlaufe
    let font_size = '13px'
    let map_color = [
        [0, '#DCDEFA'],
        [0.3, '#838AED'],
        [0.6, '#2A36E0'],
        [1, '#141D90']
    ]
    // Create the chart
    karte = Highcharts.mapChart('container_map', {
        chart: {
            map: topology // Welche Karte soll gezeichnet werden? Siehe oben...
        },

        title: {
            text: '',
        },

        colorAxis: {
            min: 74796,
            stops: map_color
        },

        navigator: {
            enabled: false
        },

        series: [{
            data: data,
            name: 'Logiernächte',
            dataLabels: {
                style: {
                    fontSize: font_size
                },
                enabled: true,
                format: ''

            }
        }]
    });
}

// Funktion für Berechnung der Daten für die Karte

function getDaten() {
    // Basis Datenstruktur für die Map mit allen Werten auf 0.
    const data = [['ch-zh', 0], ['ch-be', 0], ['ch-lu', 0], ['ch-ur', 0], ['ch-sz', 0], ['ch-nw', 0], ['ch-ni', 0], ['ch-gl', 0], ['ch-zg', 0], ['ch-fr', 0], ['ch-so', 0], ['ch-bs', 0], ['ch-bl', 0], ['ch-sh', 0], ['ch-ar', 0], ['ch-ai', 0], ['ch-sg', 0], ['ch-gr', 0], ['ch-ag', 0], ['ch-tg', 0], ['ch-ti', 0], ['ch-vd', 0], ['ch-vs', 0], ['ch-ne', 0], ['ch-ge', 0], ['ch-ju', 0]];

    //Variable der json Datenbank ./daten/raw_datajs
    let raw_data = json

    // Filterung der raw_data jen nach Auswahl auf der Webseite

    // Variablen für die Gästeherkunft
    let selected_guest_origin = $("#guest_origin :radio:checked").val()

    // if Schlaufe für die Bestimmung welche Gästeherunft gewählt wurde.
    if (selected_guest_origin == "total") {
        guest_origin = "Total"
    } else if (selected_guest_origin == "switzerland") {
        guest_origin = "Inland"
    } else {
        guest_origin = "Ausland"
    }
    //console.log("Gästeherkunft:"+gaesteherkunft)

    // Variablen für den Export der Logiernächte aus der json Datenbank
    let year = $('#range_year').val();
    let search_str = year.toString() + "01";
    let search_int = parseInt(search_str);
    let new_table = [];
    let table_data = [];

    // Schlaufe für den Export der Logiernächte aus der json Datenbank
    for (let i = 0; i < 26; i++) {
        new_table = raw_data[search_int][guest_origin];
        //console.log(raw_data[search_int]["Total"]);
        search_int++
        //search = Jahr.toString() + kanton1
        table_data.push(new_table)
    }
    //console.log("Resultat: " + table_data)

    // Update des Map Arrays mit den exportieren Daten aus der json Datenbank
    let canton = 0
    let count = 0
    for (let i = 0; i < 26; i++) {
        data[canton][1] = (table_data[count]);
        canton++
        count++
    }
    return data
}

karteAnzeigen(getDaten())

/* Code für die Anzeige des ausgewählten Jahres auf dem Regler. Quelle: https://css-tricks.com/value-bubbles-for-range-inputs/ */
const
    range = document.getElementById('range_year'),
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