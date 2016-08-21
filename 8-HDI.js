$(function () {
    $('#8-HDI').highcharts({
        chart: {
            type: 'bar',
			backgroundColor: '#FFF9E9',
			borderWidth: 3			
        },
        title: {
            text: 'UN Human Development Index',
			style: {
				fontSize: "40px"
				}
        },
        subtitle: {
			text: 'Source: <a href="http://hdr.undp.org/en/data">UN Human Development Reports</a>'
        },
        xAxis: {
            categories: ['Cambodia', 'Myanmar', 'Lao', 'Viet Nam', 'Indonesia', 'Thailand', 'Singapore'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Human Development Index',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -85,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 2000',
            data: [.419, .425, .462, .575, .606, .648, .819]
        }, {
            name: 'Year 2014',
            data: [.555, .536, .575, .666, .684, .726, .912]
        }]		
    });
});