
var myChart;
var x_durations = [];
var currentbw = [];
var ewwa = [];
var lowEwma = [];
var fastEwma = [];

var option = {
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      data:['current Request', 'ewma'],
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : x_durations
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'current Request',
          type:'line',
          stack: 'Network bandwidth Speed',
          data:currentbw
      },
      {
          name:'ewma',
          type:'line',
          stack: 'Network bandwidth Speed',
          data:ewwa
      },
    //   {
    //     name:'fast ewma',
    //     type:'line',
    //     stack: 'Network bandwidth Speed',
    //     data:fastEwma
    // },
    // {
    //   name:'low ewma',
    //   type:'line',
    //   stack: 'Network bandwidth Speed',
    //   data:lowEwma
    // }
  ]
};


function getMatchRangeTime(time, ranges) {
  if (ranges.length === 0) {
    return 0;
  }
  var len = ranges.length;
  for (var i = 0; i < ranges.length; i ++) {
    var start = ranges.start(i);
    var end = ranges.end(i);
    if (time >= start && time <= end) {
      return ranges.end(i);
    }
  }
  return time;
}

var video = document.querySelector('.js-video');
if(Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
    x_durations.push(hls.getBufferTime())
  });
  window.hlsplayer = hls;
  hls.on('hlsFragLoaded', (event, result) => {
    if (result.frag.type === 'audio') {
      return;
    }
    if (result.stats) {
      // logger.log(result);
      const {loaded, tfirst, tload} = result.stats;
      const bandwidth = (loaded / (tload - tfirst) * 1000 * 8);
      currentbw.push(bandwidth);
    }
    if (x_durations.length === 4 ) {
      myChart = echarts.init(document.querySelector('.js-canvas-box'));
    }
    if (x_durations.length >= 4) {
      myChart.setOption(option);
    }
    const bufferTime = getMatchRangeTime(video.currentTime, video.buffered);
    x_durations.push(bufferTime);
    ewwa.push(hls.abrController._bwEstimator.getEstimate())
    lowEwma.push(hls.abrController._bwEstimator.slow_.getEstimate());
    fastEwma.push(hls.abrController._bwEstimator.fast_.getEstimate())
    // console.log(hls)
  });
}

