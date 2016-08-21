



      function drawCambodia_mort() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Mortality Rate'],
          ['2000', 80.4],
          ['2006', 49.8],
          ['2010', 36.7],
          ['2014', 26.3]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 100,
							ticks: [25, 50, 75, 100]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('cambodia_mortality'));

        chart.draw(data, options);
      }

      function drawLao_mort() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Mortality Rate'],
          ['2000', 83.2],
          ['2006', 67.8],
          ['2010', 59],
          ['2014', 52.3]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 100,
							ticks: [25, 50, 75, 100]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('lao_mortality'));

        chart.draw(data, options);
      }

      function drawThailand_mort() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Mortality Rate'],
          ['2000', 19.1],
          ['2006', 14.6],
          ['2010', 12.5],
          ['2014', 10.9]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 100,
							ticks: [25, 50, 75, 100]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('thai_mortality'));

        chart.draw(data, options);
      }


      function drawVietnam_mort() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Mortality Rate'],
          ['2000', 26.1],
          ['2006', 22],
          ['2010', 19.8],
          ['2014', 17.8]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 100,
							ticks: [25, 50, 75, 100]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('vietnam_mortality'));

        chart.draw(data, options);
      }

      function drawCambodia_nourish() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Undernourishment'],
          ['2000', 32],
          ['2006', 19.6],
          ['2010', 17],
          ['2014', 15]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 50,
							ticks: [10, 20, 30, 40, 50]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('cambodia_nourish'));

        chart.draw(data, options);
      }

      function drawLao_nourish() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Undernourishment'],
          ['2000', 39.2],
          ['2006', 26.9],
          ['2010', 22.8],
          ['2014', 18.9]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 50,
							ticks: [10, 20, 30, 40, 50]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('lao_nourish'));

        chart.draw(data, options);
      }

      function drawThailand_nourish() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Undernourishment'],
          ['2000', 19],
          ['2006', 11.7],
          ['2010', 9.3],
          ['2014', 7.9]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 50,
							ticks: [10, 20, 30, 40, 50]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('thai_nourish'));

        chart.draw(data, options);
      }

      function drawVietnam_nourish() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Undernourishment'],
          ['2000', 28.1],
          ['2006', 18.5],
          ['2010', 14.5],
          ['2014', 11.8]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 50,
							ticks: [10, 20, 30, 40, 50]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('vietnam_nourish'));

        chart.draw(data, options);
      }

      function drawCambodia_exp() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Health Expenditure per Capita'],
          ['2000', 17.6],
          ['2006', 23.0],
          ['2010', 46.6],
          ['2014', 61.3]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 400,
							ticks: [100, 200, 300, 400]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('cambodia_exp'));

        chart.draw(data, options);
      }

      function drawLao_exp() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Health Expenditure per Capita'],
          ['2000', 10.5],
          ['2006', 25.1],
          ['2010', 30.0],
          ['2014', 32.6]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 400,
							ticks: [100, 200, 300, 400]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('lao_exp'));

        chart.draw(data, options);
      }

      function drawThailand_exp() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Health Expenditure per Capita'],
          ['2000', 74.2],
          ['2006', 152.0],
          ['2010', 258.7],
          ['2014', 360.4]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 400,
							ticks: [100, 200, 300, 400]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('thai_exp'));

        chart.draw(data, options);
      }

      function drawVietnam_exp() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Health Expenditure per Capita'],
          ['2000', 20.5],
          ['2006', 43.4],
          ['2010', 83.5],
          ['2014', 142.4]
        ]);

        var options = {
          isStacked: 		true,
		  legend: 			{position: 'none'},
		  chartArea: 		{width: '80%'},
		  backgroundColor:  {
							strokeWidth: 3,
							fill: '#FFF9E9'
							},
		  vAxis:			{
							maxValue: 400,
							ticks: [100, 200, 300, 400]
							}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('vietnam_exp'));

        chart.draw(data, options);
      }