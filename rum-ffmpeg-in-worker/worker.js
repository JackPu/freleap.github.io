importScripts('https://cdn.jsdelivr.net/npm/comlinkjs@3.0.2/umd/comlink.js');
importScripts('./ffmpeg/ffmpeg.js'); 


Comlink.expose(ffmpeg, self);