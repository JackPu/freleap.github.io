
function log(text) {
  var $wrap = $('.js-log-mp4');
  var logEl = document.createElement('P');
  logEl.innerText = text + ' ...';
  logEl.className = 'log-item';
  $wrap.append(logEl)
}

const ASSET_URL = './video/a3.mp4';
const video = document.querySelector('.js-player-mp4');
const mp4boxfile = MP4Box.createFile();


function playMp4() {
  log('Get Video Element');
  bindMp4box();
  const range = 'bytes=0-50000';
  fetch(ASSET_URL, {
    headers: {
      range,
    }
  }).then(function(response) {
    return response.arrayBuffer();
  }).then(function(arrayBuffer) {
    arrayBuffer.fileStart = 0;
    mp4boxfile.appendBuffer(arrayBuffer);
  });
}

function bindMp4box() {
  mp4boxfile.onReady = function (info) {
    log('Get Video Info');
    video.src = ASSET_URL;
    video.play();
    showVideoInfo(info);
	}
}

function showVideoInfo(info) {
  console.log(info);
  log('Duration: ' + parseInt(info.duration / 1000) + 's');
  log('Brands: ' + info.brands.join(','));
  log('Video Metadata:  ');
  const videoTrack = info.tracks[0];
  log('Video Codec: "' + videoTrack.codec + '"; nb_samples: ' + videoTrack.nb_samples);
  log(videoTrack.name + ': size: ' + videoTrack.size + '; bitrate: ' + videoTrack.bitrate);
  log('Audio Metadata');
  const audioTrack = info.tracks[1];
  log('Audio Codec: "' + audioTrack.codec + '"; nb_samples: ' + audioTrack.nb_samples);
  log(audioTrack.name + ': size: ' + audioTrack.size + '; bitrate: ' + audioTrack.bitrate);

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

