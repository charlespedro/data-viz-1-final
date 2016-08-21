

$(function () {

    // Prepare demo data
    var data = [

        {
            "hc-key": "ph",
            "value": 25.2
        },
        {
            "hc-key": "th",
            "value": 12.6
        },
        {
            "hc-key": "kr",
            "value": 16.5
        },
        {
            "hc-key": "kp",
            "value": 0
        },
        {
            "hc-key": "cn",
            "value": 8.5
        },
        {
            "hc-key": "jp",
            "value": 0
        },
        {
            "hc-key": "mm",
            "value": 25.6
        },
        {
            "hc-key": "id",
            "value": 11.3
        },
        {
            "hc-key": "sg",
            "value": 0
        },
        {
            "hc-key": "my",
            "value": 1.7
        },
        {
            "hc-key": "vn",
            "value": 9.8
        },
        {
            "hc-key": "kh",
            "value": 18.9
        },
        {
            "hc-key": "la",
            "value": 23.2
        },
        {
            "hc-key": "bn",
            "value": 0
        },
        {
            "hc-key": "tw",
            "value": 1.6
        },
    ];

    // Initiate the chart
    $('#9-poverty-map').highcharts('Map', {

        title : {
            text : 'Percent of Population below National Poverty Lines',
			style : {fontSize: '30px'}
        },

        subtitle : {
            text : 'Source: <a href="http://www.adb.org/data/main">Asian Development Bank</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },


        colorAxis: {
            min: 0
        },
        credits: {
            enabled: false
        },
        series : [{
            data : data,
            mapData: Highcharts.maps['custom/asia'],
            joinBy: 'hc-key',
			allAreas: false,
            name: 'Poverty Rate (%)',
            states: {
                hover: {
                    color: '#FF8A6E'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});