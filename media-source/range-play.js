
function log(wrap, text) {
    var $wrap = $(wrap);
    var logEl = document.createElement('P');
    logEl.innerText = text + ' ...';
    logEl.className = 'log-item';
    $wrap.append(logEl)
}

var videoUrl = './video/avegers3.webm';

var index = 0;
// create a transmuxer:
var transmuxer = new muxjs.mp4.Transmuxer();
var remuxedSegs = [];
var remuxedBytesLength = 0;
var remuxedInitSegment = null;
var createInitSegment = true;
var sourceBuffer;

function playMp4() {
    var video = document.querySelector('.js-player-mp4');
    if (window.MediaSource) {
        var mediaSource = new MediaSource();
        video.src = URL.createObjectURL(mediaSource);
        log('.js-log-mp4', 'Create Media Source');
        mediaSource.addEventListener('sourceopen', sourceOpen, { once: true });
        transmuxer.on('data', function (segment) {
            segment.byteLength = segment.initSegment.byteLength
            remuxedSegs.push(segment);
            remuxedBytesLength = segment.initSegment.byteLength;
            if (!remuxedInitSegment) {
                remuxedInitSegment = segment.initSegment;
            }
            appendBuffer();
        });
    } else {
        console.log("The Media Source Extensions API is not supported.")
    }
    function sourceOpen(e) {
        URL.revokeObjectURL(video.src);
        var mime = 'video/webm; codecs="vorbis, vp8"';
        var mediaSource = e.target;
        sourceBuffer = mediaSource.addSourceBuffer(mime);
        sourceBuffer.addEventListener('updateend', updateEnd);
        log('.js-log-m3u8', 'Fetch Segment ~' + videoUrl);
        var ranges = 'bytes=' + (500000 * index) + '-' + (500000 * (index+1))
        fetch(videoUrl, {
            headers: { range: ranges } 
        }).then(function (response) {
            return response.arrayBuffer();
        })
        .then(function (data) {
            // var sourceBuffer = mediaSource.sourceBuffers[0];
            sourceBuffer.appendBuffer(data);
            // data events signal a new fMP4 segment is ready:
            // transmuxer.push(new Uint8Array(arrayBuffer));
            // transmuxer.flush();
        });
    }
    function updateEnd() {
        if (!sourceBuffer.updating && mediaSource.readyState === 'open'
            && index === 1) {
            // mediaSource.endOfStream();
            log('.js-log-mp4', 'Start Play');
            video.play();
            return;
        }
        if (index>5) {
            return mediaSource.endOfStream();
        }
        // Fetch the next segment of video when user starts playing the video.
        fetchNextSegment();
    }
    function fetchNextSegment() {
        index += 1;
        var ranges = 'bytes=' + (500000 * index + 1) + '-' + (500000 * (index+1))
        fetch(videoUrl, {
            headers: { range: ranges }
        })
        .then(response => response.arrayBuffer())
        .then(data => {
            // transmuxer.flush();
            //transmuxer.push(new Uint8Array(data));
            // transmuxer.flush();
            var sourceBuffer = mediaSource.sourceBuffers[index-1];
            sourceBuffer.appendBuffer(data);
        });
    }

    var offset = 0;
    function appendBuffer() {
        var bytes = null;
        if (createInitSegment) {
            bytes = new Uint8Array(remuxedInitSegment.byteLength + remuxedBytesLength)
            bytes.set(remuxedInitSegment, offset);
            offset += remuxedInitSegment.byteLength;
            createInitSegment = false;
        } else {
            bytes = new Uint8Array(remuxedBytesLength);
        }
        var i = offset;
        bytes.set(remuxedSegs[index].initSegment, i);
        offset += remuxedSegs[index].byteLength;
        remuxedBytesLength = 0;
        // var sourceBuffer = mediaSource.sourceBuffers[index];
        if (index === 0) {
            log('.js-log-m3u8', 'MSE appendBuffer');
        }
        sourceBuffer.appendBuffer(bytes);
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

$(document).ready(function () {
    $('.js-play-mp4').on('click', function () {
        playMp4();
        $(this).hide();
        $('.js-log-mp4').addClass('active')
    });
})

