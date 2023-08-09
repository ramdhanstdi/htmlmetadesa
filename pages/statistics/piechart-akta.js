am4core.ready(function () {
  am4core.useTheme(am4themes_animated);

  var chart = am4core.create('chartdiv', am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0;

  chart.legend = new am4charts.Legend();

  chart.data = [
    {
      data: '0 s/d 1 Tahun',
      jumlah: 52,
    },
    {
      data: '2 s/d 4 Tahun',
      jumlah: 203,
    },
    {
      data: '5 s/d 9 Tahun',
      jumlah: 404,
    },
    {
      data: '10 s/d 14 Tahun',
      jumlah: 401,
    },
    {
      data: '15 s/d 19 Tahun',
      jumlah: 420,
    },
    {
      data: '20 s/d 24 Tahun',
      jumlah: 441,
    },
    {
      data: '25 s/d 29 Tahun',
      jumlah: 413,
    },
    {
      data: '30 s/d 34 Tahun',
      jumlah: 388,
    },
    {
      data: '35 s/d 39 Tahun',
      jumlah: 399,
    },
    {
      data: '40 s/d 44 Tahun',
      jumlah: 394,
    },
    {
      data: '45 s/d 49 Tahun',
      jumlah: 358,
    },
    {
      data: '50 s/d 54 Tahun',
      jumlah: 308,
    },
    {
      data: 'Belum Mengisi',
      jumlah: 50,
    },
  ];

  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = 'jumlah';
  series.dataFields.category = 'data';
});
