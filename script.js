google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
      ['年', '価格'],
      ['2003年', 190],
      ['2004年', 199],
      ['2005年', 220],
      ['2006年', 240],
      ['2007年', 260],
      ['2008年', 270],
      ['2009年', 290],
      ['2010年', 290],
      ['2011年', 290],
      ['2012年', 320],
      ['2013年', 360],
      ['2014年', 339],
      ['2015年', 340],
      ['2016年', 340],
      ['2017年', 340],
      ['2018年', 340],
      ['2019年', 340],
      ['2020年', 340],
      ['2021年', 340],
      ['2022年', 360]
    ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0,
                    1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" }
                    ]);
  var options = {
    title: '月見バーガー価格変遷',
    series: {
      0: {targetAxisIndex: 0}
    },
    vAxes: {
      0: {title: '価格'}
    }
  };
  new google.visualization.LineChart(document.getElementById('chart_div')).draw(view, options);
}

$(window).resize(() => {
  if (this.resizeTo) {
    clearTimeout(this.resizeTo);
  }
  this.resizeTo = setTimeout(() => {
    $(this).trigger('resizeEnd');
  }, 500);
});

$(window).on('resizeEnd', () => {
  drawChart();
});