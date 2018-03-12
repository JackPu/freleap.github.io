
function log(wrap, text) {
  var $wrap = $(wrap);
  var logEl = document.createElement('P');
  logEl.innerText = text + ' ...';
  logEl.className = 'log-item';
  $wrap.append(logEl)
}

function playMp4() {
  var videoMp4 = document.querySelector('.js-player-mp4');
  log('.js-log-mp4', 'Get Video Element')
  if (window.MediaSource) {
    var mediaSource = new MediaSource();
    videoMp4.src = URL.createObjectURL(mediaSource);
    log('.js-log-mp4', 'Open Media Source')
    mediaSource.addEventListener('sourceopen', sourceOpen);
  } else {
  console.log("The Media Source Extensions API is not supported.")
  }

  function sourceOpen(e) {
    URL.revokeObjectURL(videoMp4.src);
    var mime = 'video/webm; codecs="vorbis, vp8"';
    var mediaSource = e.target;
    var sourceBuffer = mediaSource.addSourceBuffer(mime);
    var videoUrl = './video/avegers3.webm';
    log('.js-log-mp4', 'Fetch "./video/avegers3.webm"')
    fetch(videoUrl)
      .then(function(response) {
        log('.js-log-mp4', 'Finish "./video/avegers3.webm" Load')
        return response.arrayBuffer();
      })
      .then(function(arrayBuffer) {
      sourceBuffer.addEventListener('updateend', function(e) {
        log('.js-log-mp4', 'Update Media Source Buffer')
        if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
          log('.js-log-mp4', 'End Media Source Buffer')
          mediaSource.endOfStream();
          videoMp4.play().then(function() {
            log('.js-log-mp4', 'Playing Video')
            $('.js-log-mp4').addClass('fadeout');
          }).catch(function(err) {
            log('.js-log-mp4', err)
          });
        }
      });
      sourceBuffer.appendBuffer(arrayBuffer);
      });
  }
}

var playManifest = {};
function fetchM3u8() {
  var parser = new m3u8Parser.Parser();

  var m3u8url = './video/avengers.m3u8';
  log('.js-log-m3u8', 'Fetch "./video/index.m3u8"')
  fetch(m3u8url, {
  })
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    log('.js-log-m3u8', 'Parse "./video/index.m3u8"')
    parser.push(data);
    parser.end();
    playManifest = parser.manifest;
    log('.js-log-m3u8', 'Playlist Ready')
    playSegment();
  })
}
var index = 0;
// create a transmuxer:
var transmuxer = new muxjs.mp4.Transmuxer();
var remuxedSegs = [];
var remuxedBytesLength = 0;
var remuxedInitSegment = null;
var createInitSegment = true;
var sourceBuffer;

function playSegment() {
  var video = document.querySelector('.js-player-m3u8');
  if (window.MediaSource) {
    var mediaSource = new MediaSource();
    video.src = URL.createObjectURL(mediaSource);
    log('.js-log-m3u8', 'Create Media Source');
    mediaSource.addEventListener('sourceopen', sourceOpen, { once: true });
    transmuxer.on('data', function (segment) {
      remuxedSegs.push(segment);
      remuxedBytesLength += segment.data.byteLength;
      remuxedInitSegment = segment.initSegment;
      // sourceBuffer.appendBuffer(segment.data.buffer);
    });
    transmuxer.on('done', function () {
      var offset = 0;
      var bytes = null;
      if (createInitSegment) {
        bytes = new Uint8Array(remuxedInitSegment.byteLength + remuxedBytesLength)
        bytes.set(remuxedInitSegment, offset);
        offset += remuxedInitSegment.byteLength;
        createInitSegment = false;
      } else {
        bytes = new Uint8Array(remuxedBytesLength);
      }
      for (j = 0, i = offset; j < remuxedSegs.length; j++) {
        bytes.set(remuxedSegs[j].data, i);
        i += remuxedSegs[j].byteLength;
      }
      muxedData = bytes;
      remuxedSegs = [];
      remuxedBytesLength = 0;
      // vjsBytes = bytes;
      videoInspect(bytes);
      sourceBuffer.appendBuffer(bytes);
      video.play();
    });
  } else {
    console.log("The Media Source Extensions API is not supported.")
  }
  function sourceOpen(e) {
    URL.revokeObjectURL(video.src);
    // var mime = 'video/mp4; codecs="avc1.42c015, mp4a.40.5"';avc1.42001e"
    var mime = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    var mediaSource = e.target;
    sourceBuffer = mediaSource.addSourceBuffer(mime);
    // sourceBuffer.addEventListener('updateend', updateEnd);
    var videoUrl = './video/' + playManifest.segments[index]['uri'];
    log('.js-log-m3u8', 'Fetch Segment ~' + videoUrl);
    fetch(videoUrl, {
       // headers: { range: 'bytes=0-5671398' }
    })
    .then(function(response) {
      return response.arrayBuffer();
    })
    .then(function(arrayBuffer) {
      // data events signal a new fMP4 segment is ready:
      transmuxer.push(new Uint8Array(arrayBuffer));
      transmuxer.flush();
      // sourceBuffer.appendBuffer(arrayBuffer);
    });
  }
  function updateEnd() {
    if (!sourceBuffer.updating && mediaSource.readyState === 'open' 
    && index == playManifest.segments.length - 1) {
      mediaSource.endOfStream();
      return;
    }
    // video.play().catch(function(err) {
    //   console.log(err);
    // });
     // Video is now ready to play!
     //var bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
     // console.log(bufferedSeconds + ' seconds of video are ready to play!');
     // Fetch the next segment of video when user starts playing the video.
     fetchNextSegment();
   }
   function fetchNextSegment() {
    index += 1;
    var url = './video/' + playManifest.segments[index]['uri'];
    fetch(url, { headers: { } })
    .then(response => response.arrayBuffer())
    .then(data => {
      transmuxer.push(new Uint8Array(data));
      transmuxer.flush();
      // var sourceBuffer = mediaSource.sourceBuffers[0];
      // sourceBuffer.appendBuffer(data);
    });
  }
  function sourceClose() {
      console.log('close MSE!');
  }

  function videoInspect(bytes) {
    var parsed = muxjs.mp4.tools.inspect(bytes);
    // dig into the boxes:
    console.log('The major brand of the first box:', parsed[0].majorBrand);
  }
}

$(document).ready(function() {
  $('.js-play-mp4').on('click', function() {
    playMp4();
    $(this).hide();
    $('.js-log-mp4').addClass('active')
  })
  $('.js-play-m3u8').on('click', function() {
    fetchM3u8();
    $(this).hide();
    $('.js-log-m3u8').addClass('active')
  })
  
})

