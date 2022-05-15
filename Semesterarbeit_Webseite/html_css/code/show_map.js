async function karteAnzeigen() {

    // Kartendaten von der Schweiz laden
    let topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
    ).then(response => response.json());

    // Basisdaten von 2005
    let data = [
        ['ch-zh', 3567970],
        ['ch-be', 4697253],
        ['ch-lu', 1407112],
        ['ch-ur', 219753],
        ['ch-sz', 552396],
        ['ch-nw', 562552],
        ['ch-ni', 268707],
        ['ch-gl', 139974],
        ['ch-zg', 236312],
        ['ch-fr', 349496],
        ['ch-so', 300141],
        ['ch-bs', 734313],
        ['ch-bl', 206106],
        ['ch-sh', 105697],
        ['ch-ar', 164045],
        ['ch-ai', 144889],
        ['ch-sg', 1012368],
        ['ch-gr', 5569534],
        ['ch-ag', 598870],
        ['ch-tg', 367820],
        ['ch-ti', 2538996],
        ['ch-vd', 2340096],
        ['ch-vs', 4201759],
        ['ch-ne', 202986],
        ['ch-ge', 2379795],
        ['ch-ju', 74796]
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

karteAnzeigen()


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