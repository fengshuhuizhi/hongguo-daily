(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Heat Comparison ---
  var chartHeat = echarts.init(document.getElementById('chart-heat'), null, { renderer: 'svg' });

  var dramas = ['朝思暮时', '万妖图录传7', '罪妻战神4', '罪妻战神', '罪妻战神3', '盛夏来信', '罪妻战神2', '东北大腰子3', '逃离他的岛', '开局大帝'];
  var heatData = [8663, 9442, 7001, 6843, 6665, 6659, 6632, 6358, 6160, 6134];

  chartHeat.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      axisPointer: { type: 'shadow' },
      formatter: function(params) {
        return params[0].name + '<br/>热度: ' + params[0].value + '万';
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dramas,
      axisLabel: {
        color: muted,
        fontSize: 11,
        rotate: 30,
        interval: 0
      },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      name: '热度（万）',
      nameTextStyle: { color: muted, fontSize: 12 },
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [{
      type: 'bar',
      data: heatData.map(function(val, idx) {
        return {
          value: val,
          itemStyle: {
            color: idx === 0 ? accent : (idx < 3 ? accent2 : muted + '88'),
            borderRadius: [4, 4, 0, 0]
          }
        };
      }),
      barWidth: '60%',
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontSize: 11,
        formatter: '{c}万'
      }
    }]
  });

  window.addEventListener('resize', function() { chartHeat.resize(); });
})();
