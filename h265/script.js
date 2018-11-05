/** Global: libde265 */
var VIDEO_URL = 'h265-test-640.mp4'
var player = null
var guessCount = 0
var lastSeenTime = -1
var guessedFrameRate = 0
var durationCumul = 0

function guessFrameRate(myVideo, log) {
  var currentVideoTime = 1000 * myVideo.currentTime
  var dt = currentVideoTime - lastSeenTime
  dt = Math.ceil(dt * 10) / 10
  lastSeenTime = currentVideoTime
  if (dt === 0) return
  if (guessCount++ === 0) return
  durationCumul += dt
  log.innerHTML = (durationCumul / guessCount).toFixed(2) + ' fps'
}

function playH264() {
  var video = document.querySelector('video')
  var fps = document.querySelector('.h264-fps')
  var status = document.querySelector('.h264-status')

  video.addEventListener('play', function () {
    status.innerHTML = 'Playing'
    document.querySelector('.js-log-h264').style.display = 'none'
  })
  video.addEventListener('pause', function () {
    status.innerHTML = 'Pause'
  })
  video.play()
  var guessingInterval = setInterval(function () {
    guessFrameRate(video, fps)
  }, 10)
  video.addEventListener('ended', function () {
    clearInterval(guessingInterval)
    status.innerHTML = 'End!'
  })
}

function playHevc() {
  var video = document.getElementById('canvas')
  var fpsWrap = document.querySelector('.hevc-fps')
  var status = document.querySelector('.hevc-status')
  var playback = function (event) {
    // event.preventDefault()
    if (player) {
      player.stop()
    }

    player = new libde265.RawPlayer(video)
    player.set_status_callback(function (msg, fps) {
      player.disable_filters(true)
      console.log(msg);
      switch (msg) {
        case 'loading':
          status.innerHTML = 'Loading movie...'
          break
        case 'initializing':
          status.innerHTML = 'Initializing...'
          break
        case 'playing':
          status.innerHTML = 'Playing...'
          document.querySelector('.js-log-hevc').style.display = 'none'
          playH264()
          break
        case 'stopped':
          status.innerHTML = 'stopped'
          break
        case 'fps':
          fpsWrap.innerHTML = Number(fps).toFixed(2) + ' fps'
          break
        default:
          status.innerHTML = msg
      }
    })
    player.playback(VIDEO_URL)
  }
  playback()
}

window.onload = function () {
  console.log('Playing with libde265', libde265.de265_get_version())
  var buttons = document.querySelectorAll('.js-play')
  buttons.forEach(function (button) {
    button.addEventListener('click', playHevc, false)
  })
};