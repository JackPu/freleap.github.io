(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"04fa":function(t,e,a){"use strict";var n=a("0900"),r=a.n(n);r.a},"0900":function(t,e,a){},"0d22":function(t,e,a){"use strict";var n=a("0ddd"),r=a.n(n);r.a},"0ddd":function(t,e,a){},"156e":function(t,e,a){"use strict";var n=a("3446"),r=a.n(n);r.a},"18c8":function(t,e,a){},"1b6f":function(t,e,a){"use strict";var n=a("4915"),r=a.n(n);r.a},"1b90":function(t,e,a){"use strict";var n=a("5eb4"),r=a.n(n);r.a},"2a4a":function(t,e,a){},"2c1a":function(t,e,a){"use strict";var n=a("18c8"),r=a.n(n);r.a},3446:function(t,e,a){},"3e27":function(t,e,a){},"42e9":function(t,e,a){"use strict";var n=a("76a6"),r=a.n(n);r.a},4447:function(t,e,a){"use strict";var n=a("af9d"),r=a.n(n);r.a},"47cc":function(t,e,a){},4915:function(t,e,a){},5311:function(t,e,a){"use strict";var n=a("d39e"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-core-video-player",{attrs:{controls:"",src:"https://media.vued.vanthink.cn/the_garden_of_words_trailer_english__1080p.mp4"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"vcp-el",staticClass:"vcp-container"},[a("video",{ref:"vcp-video",attrs:{src:t.src}}),a("Layers"),a("Dashboard")],1)},l=[],c=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),u=a("7618"),d=(a("28a5"),a("f201")),f=a("e312"),h=a("6a87"),p={"zh-CN":d,ja:h,en:f},v={t:function(t,e){for(var a=t.split("."),r=a.length,s=n,i=0;i<r;i++)s.hasOwnProperty(a[i])&&(s=s[a[i]]);return s||e},setLocale:function(t){return n="object"===Object(u["a"])(t)?t:p[t||"en"],n}},m=v;r["a"].directive("t",{bind:function(t,e){console.log(e.value),t.innerText=m.t(e.expression)}});var g={ERROR_NO_MEDIA:"ERROR_NO_MEDIA",AUTOPLAYERROR:"AUTOPLAYERROR",VRMODE:"vrmode",SERVICE_LOADING:"service_loading",SERVICE_ENDED:"service_ended",LOADING_START:"loading_start",LOADING_END:"loading_end",LIFECYCYLE_INITING:"lifecycle_initing",LIFECYCYLE_INITED:"lifecycle_inited",LIFECYCYLE_PARSED:"lifecycle_parse",LIFECYCYLE_STOP:"lifecycle_stop",UI_DASHBOARD_SHOW:"ui_dashboard_show",UI_DASHBOARD_HIDE:"ui_dashboard_hide",SCRUBSTART:"scrubstart",SCRUBEND:"scrubend",UI_PLAY:"ui_play",UI_PAUSE:"ui_pause",CORE_TO_MP4:"core_to_mp4",PLAY:"play",PAUSE:"pause",LOADEDDATA:"loadeddata",CANPLAYTHROUGH:"canplaythrough",ERROR:"error",DURATIONCHANGE:"durationchange",ENDED:"ended",TIMEUPDATE:"timeupdate",LOADEDMETADATA:"loadedmetadata",WAITING:"waiting",PLAYING:"playing",RETRY:"retry",SEEKED:"seeked",SEEKING:"seeking",VOLUMECHANGE:"volumechange",EXIT:"exit",PROGRESS:"progress",LOADSTART:"loadstart",RESOLUTION_UPDATE:"resolution_update"},y=g,b={loop:!0,volume:1,muted:!1,autoplay:!1,preload:"metadata",playList:[],safeBufferTime:2,minPlayBufferTime:1},_=b,w={NO_SOURCE:{code:"e404",msg:"Prop `src` not found"},2:"Media Network Error",3:"Video Cannot DECODE",4:"Video Cannot Play!",500:"API ERROR",501:"API SOURCE NOT FOUND",601:"HLS ERROR",602:"DASH Error",701:"Parse Error",801:"Not found reason"},E=w,O={DASH:"DASH",HLS:"HLS",MP4:"MP4"},C=(a("6b54"),a("a481"),a("0347"));function P(t){return"string"===typeof t}var M=navigator.userAgent.toLowerCase();function k(t){return t<10?"0".concat(t):t}function $(t,e){t=parseInt(t);var a=t%60,n=parseInt(t/3600),r=parseInt(t%3600/60);return"array"===e?[n,r,a]:"m:s"===e?(r=parseInt(t/60),[r,a].map(function(t){return k(t)}).join(":")):[n,r,a].map(function(t){return k(t)}).join(":")}function A(t){var e=0,a=0;do{e+=t.offsetLeft,a+=t.offsetTop}while(t=t.offsetParent);return{left:e,top:a}}function S(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var L=function(){return navigator.userAgent.indexOf("Safari")>-1};function x(t,e){if(0===e.length)return 0;for(var a=0;a<e.length;a++){var n=e.start(a),r=e.end(a);if(t>=n&&t<=r)return e.end(a)}return t}function j(){return localStorage.__vrplayer_core}var T=C["a"].any,R=C["a"].android,D=C["a"].apple&&C["a"].apple.device,I=(D&&L(),/MQQBrowser/i.test(M)),z=(/ucbrowser/i.test(M),/chrome/i.test(M),/MicroMessenger/i.test(M),/firefox/i.test(M),a("55dd"),a("d225")),H=a("b0b4");function N(t,e){var a="Error: ".concat(E[t]," ").concat(e);throw j&&(a+=" => https://github.com/JackPu/vue-core-video-player/tree/dev/docs"),new Error(a)}function B(t){while(t.firstChild)t.removeChild(t.firstChild)}function F(t,e){var a=e.split(" ");if(t.classList&&1===a.length)t.classList.add(e);else{var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function U(t,e){if(t.classList)t.classList.remove(e);else{for(var a=t.className.split(" "),n=-1,r=0,s=a.length;r<s;r++)a[r]===e&&(n=r);n>-1&&a.splice(n,1),t.className=a.join(" ")}}function Y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function V(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Y(a,!0).forEach(function(e){Object(c["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Y(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var G=["play","playing","timeupdate","pause","seeking","waiting","loadedmetadata","loadeddata","loadstart","seeked","ended","durationchange","progress","canplaythrough","volumechange"],q=["muted","voloume","loop","preload"],J=function(){function t(e){Object(z["a"])(this,t),this.config=Object.assign(_,e),this.parse(this.config),this.$video=this.config.videoEl,this.$el=this.config.el,this._eventEmitter=e.eventEmitter,this.state={},this.parse(),this.init()}return Object(H["a"])(t,[{key:"parse",value:function(){var t=this.config,e=t.src,a=t.playList;this.initResolution(e,a),this.initResolution()}},{key:"checkSource",value:function(t){if(!t){var e=E.NO_SOURCE.code;this.emit(y.ERROR,{code:e}),N(e)}/\.m3u8/.test(t)&&(this.config.core=O.HLS,this.config.hls=t),/\.mpd/.test(t)&&(this.options.core=O.DASH,this.source.dash=t)}},{key:"init",value:function(){this.checkSource(this.config.src),this._autoRegisterEvents(),this._setVideoAttr(),this.emit(y.LIFECYCYLE_INITED)}},{key:"_autoplay",value:function(){var t=this;if(this.options.autoplay&&!T){var e=function(){var e=t.player.play();t.autoPlayPolicy(e)};if(this.options.core===O.HLS)return this.emit(y.SERVICE_LOADING,!0),this.on(y.LOADEDMETADATA,function(){e()});e()}}},{key:"setSource",value:function(t){}},{key:"setResolution",value:function(){var t=this,e=this.config,a=e.playList,n=e.defaultResolution;if(a&&a.length>1)for(var r=0;r<a.length;r++)a[r].resolution===1*n&&function(){t.source=Object.assign(t.source,V({src:a[r].url},a[r]));var e=t.isPlaying(),n=t.getCurrentTime();t.$video.src=a[r].url,t.$video.load(),e&&n<1&&t.$video.play();var s=y.CANPLAYTHROUGH,i=0,o=function a(){R&&I?(t.play(),1===i&&t.seek(n),i+=1):t.seek(n),R&&I&&!e&&t.pause(),t.$video.removeEventListener(y.CANPLAYTHROUGH,a),2===i&&(t.$video.removeEventListener(y.DURATIONCHANGE,a),i=0)},l=function a(){e&&t.play(),t.$video.removeEventListener(y.SEEKED,a)},c=function e(){t.start(),t.$video.removeEventListener(y.PLAYING,e)};R&&I&&(s=y.DURATIONCHANGE,t.play()),t.$video.addEventListener(s,o),t.$video.addEventListener(y.SEEKED,l),t.$video.addEventListener(y.PLAY,c)}()}},{key:"setAudio",value:function(t){}},{key:"_autoRegisterEvents",value:function(){var t=this;G.forEach(function(e){t.$video.addEventListener(e,function(a){var n="on".concat(e);"function"===typeof t[n]&&t[n](a),t.emit(e,{name:e,target:t.$video})})}),this.$video.addEventListener("error",function(e){e.target.getAttribute("src")&&(e.target.error&&e.target.error.code?t.emit("error",e.target.error):("object"!==Object(u["a"])(e)&&(e={code:5001,e:e}),t.emit("error",e)))}),this.on(y.CORE_TO_MP4,function(){t.downgradeCore()}),this._bindProgressEvent()}},{key:"_bindProgressEvent",value:function(){var t=this,e=this.config,a=e.minPlayBUfferTime,n=e.safeBufferTime,r=function(){if(t.state.waiting_trigger){var e=t.getBufferTime(),r=t.getCurrentTime(),s=t.getDuration();if(!(r<2)&&!(s-r<a)){var i=e-r;e-r<a?(t.player.pause(),t.state.waiting_pause=!0,t.emit(y.LOADING_START,!0)):t.state.waiting_pause&&i>n&&(t.play(),t.state.waiting_pause=!1)}}};this.on(y.UI_PLAY,function(){t.state.waiting_pause=!0});var s=!1;this.on(y.PLAY,function(){s||(s=!0,t.on(y.PROGRESS,r))}),this.on(y.UI_PAUSE,function(){t.state.waiting_trigger=!1}),this.on(y.UI_PLAY,function(){t.state.waiting_trigger=!0})}},{key:"play",value:function(){this.$video.play()}},{key:"pause",value:function(){this.$video.pause()}},{key:"isPlaying",value:function(){return!this.$video.paused&&!this.$video.ended}},{key:"replay",value:function(){this.$video.play()}},{key:"seek",value:function(t){this.$video.currentTime=t}},{key:"requestPictureInPicture",value:function(){var t=this.$video;try{t!==document.pictureInPictureElement?t.requestPictureInPicture():document.exitPictureInPicture()}catch(e){console.error(e)}}},{key:"onended",value:function(){var t=this.config.loop;t&&this.player.play()}},{key:"getDuration",value:function(){return this.$video&&this.$video.duration||0}},{key:"getCurrentTime",value:function(){var t=this.$video.currentTime||0;return t}},{key:"getBufferTime",value:function(){var t=this.$video,e=this.getCurrentTime();return x(e,t.buffered)}},{key:"getProgress",value:function(){return this.getCurrentTime()&&(this.getCurrentTime()/this.getDuration()*100).toFixed(2)||0}},{key:"getVolume",value:function(){return this.$video?this.$video.volume:1}},{key:"getVideoAttr",value:function(t){return this.$video[t]}},{key:"setVideoAttr",value:function(t,e){this.$video[t]=e}},{key:"_setVideoAttr",value:function(){var t=this;T&&(this.$video.setAttribute("x5-video-player-type","h5"),this.$video.setAttribute("x5-video-player-fullscreen",!1)),this.$video.loop=!1,q.forEach(function(e){t.config[e]&&(t.$video[e]=t.config[e])})}},{key:"autoPlayPolicy",value:function(t){var e=this;void 0!==t&&t.catch(function(t){e.emit(y.AUTOPLAYERROR,t),e.options.autoplay=!1}).then(function(){})}},{key:"setVolume",value:function(t){this.$video.volume=t}},{key:"setMuted",value:function(t){this.$video.muted=t,t&&this.emit(y.VOLUMECHANGE,!0)}},{key:"initResolution",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=this.config.resolution,n=e.length,r=[].concat(e);r.sort(function(t,e){return t.resolution<e.resolution?1:-1}),this.medias=r;for(var s=0;s<n;s++)r[s].url===t&&Object.assign(this.source,V({src:r[s].url},r[s])),t||r[s].resolution!==a||Object.assign(this.source,V({src:r[s].url},r[s])),this.source.src||Object.assign(this.source,V({src:r[s].url},r[s]))}},{key:"destroy",value:function(){this.pause(),B(this.el)}},{key:"getVideoElement",value:function(){return this.$video}},{key:"on",value:function(t,e){this._eventEmitter.on(t,e)}},{key:"emit",value:function(t,e){this._eventEmitter.emit(t,e)}}],[{key:"debug",set:function(t){localStorage.__vrplayer_debug=!!t||""}}]),t}();window.VCPVideoCore=J;var K=J,W=a("308d"),Q=a("6bb5"),X=a("4e2b"),Z=function(t){function e(t){return Object(z["a"])(this,e),Object(W["a"])(this,Object(Q["a"])(e).call(this,t))}return Object(X["a"])(e,t),e}(K),tt=Z,et=function(t){function e(t){return Object(z["a"])(this,e),Object(W["a"])(this,Object(Q["a"])(e).call(this,t))}return Object(X["a"])(e,t),e}(K),at=et,nt=function(t){function e(t){return Object(z["a"])(this,e),Object(W["a"])(this,Object(Q["a"])(e).call(this,t))}return Object(X["a"])(e,t),e}(K),rt=nt,st={};function it(t){var e,a=S();t._id=a,e=t.core===O.HLS?tt:t.core===O.DASH?at:t.core===O.VR?rt:K;var n=new e(t);return n.id=a,st[a]=n,n}var ot=a("c9fc"),lt=a.n(ot),ct=lt()(),ut={data:function(){return{show:!1,fullscreen:!1,isPlaying:!1,_coreID:""}},created:function(){var t=this;this.on(y.LIFECYCYLE_INITING,function(e){t.$player=e,t.$el=t.$player.$el}),this.on(y.PLAY,function(){console.log("play!"),t.isPlaying=!0}),this.on(y.PAUSE,function(){console.log("pause!"),t.isPlaying=!1})},_events:{},methods:{play:function(){this.$player.play()},pause:function(){this.$player.pause()},enterFullscreen:function(){var t=this.$el;t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.requestFullScreen&&t.requestFullscreen(),F(t,"fullscreen"),this.emit("fullscreen",!0),this.fullscreen=!0},cancelFullscreen:function(t){var e=this.$el;document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.cancelFullScreen&&document.cancelFullScreen(),U(e,"fullscreen"),this.emit("fullscreen",!1),this.fullscreen=!1},getFullscreen:function(){return!document.fullscreenElement&&!document.webkitIsFullScreen&&!document.mozFullScreen&&!document.msFullscreenElement},on:function(t,e){var a=this;P(t)?(this._events[t]=e,ct.on(t,e)):Array.isArray(t)&&t.forEach(function(t){a._events[t]=e,ct.on(t,e)})},emit:function(t,e){ct.emit(t,e)}}},dt=ut,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-dashboard"},[a("Progress"),a("Controls")],1)},ht=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-progress-hover",on:{click:t.seek}},[a("div",{staticClass:"vcp-progress"},[a("div",{staticClass:"vcp-progress-loaded",style:{width:t.bufferProgress+"%"}}),a("div",{staticClass:"vcp-progress-played",style:{width:t.progress+"%"}},[a("div",{staticClass:"thumb-drag"})])])])},vt=[],mt={name:"Progress",props:{visible:Boolean},mixins:[dt],data:function(){return{progress:0,bufferProgress:0}},created:function(){var t=this;this.on(y.TIMEUPDATE,function(){var e=t.$player.getCurrentTime(),a=t.$player.getDuration();t.progress=(e/a*100).toFixed(2)}),this.on(y.PROGRESS,function(){var e=t.$player.getBufferTime(),a=t.$player.getDuration();e>0&&a>0&&(t.bufferProgress=(e/a*100).toFixed(2))});Date.now();this.on(y.LOADSTART,function(){Date.now();var e=t.$player.getBufferTime(),a=t.$player.getDuration();t.bufferProgress=(e/a*100).toFixed(2)})},methods:{seek:function(t){var e=A(t.currentTarget);this.getFullscreen()&&(e.left=0);var a=t.currentTarget.getBoundingClientRect(),n=t.pageX-a.left,r=t.currentTarget.offsetWidth,s=(n/r*100).toFixed(2);this.progress=s;var i=this.$player.getDuration();this.$player.seek(n/r*i)}}},gt=mt,yt=(a("0d22"),a("2877")),bt=Object(yt["a"])(gt,pt,vt,!1,null,null,null),_t=bt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-controls"},[a("div",{staticClass:"playback-control"},[a("play-pause-cntrol"),a("time-span")],1),a("div",{staticClass:"setting-control"},[a("volume-control"),a("picture-in-picture"),a("fullscreen-control"),a("settings-control")],1)])},Et=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-control"},[t.isPlaying?a("div",{staticClass:"btn-control btn-pause",on:{click:t.pause}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"48",viewBox:"0 0 36 48"}},[a("g",{attrs:{transform:"translate(-950 -398)"}},[a("rect",{attrs:{width:"12",height:"48",transform:"translate(950 398)",fill:"#fff"}}),a("rect",{attrs:{width:"12",height:"48",transform:"translate(974 398)",fill:"#fff"}})])]),a("span",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.pause")))])]):a("div",{staticClass:"btn-control btn-play",on:{click:t.play}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"41",height:"47",viewBox:"0 0 41 47"}},[a("path",{attrs:{d:"M23.5,0,47,41H0Z",transform:"translate(41) rotate(90)",fill:"#fff"}})]),a("span",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.play")))])])])},Ct=[],Pt={name:"PlayPauseControl",mixins:[dt],props:{visible:Boolean}},Mt=Pt,kt=(a("d658"),Object(yt["a"])(Mt,Ot,Ct,!1,null,null,null)),$t=kt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-control timespan"},[a("span",{staticClass:"time-current"},[t._v(t._s(t.currentTime))]),a("span",{staticClass:"time-split"},[t._v(" / ")]),a("span",{staticClass:"time-duration"},[t._v(t._s(t.duration))])])},St=[],Lt={name:"TimeSpan",props:{visible:Boolean},mixins:[dt],data:function(){return{currentTime:"00:00:00",duration:""}},created:function(){var t=this;this.on(y.TIMEUPDATE,function(){var e=t.$player.getCurrentTime();if(e){t.currentTime=$(e);var a=t.$player.getDuration();a!==t.duration&&(t.duration=$(a))}}),this.on(y.DURATIONCHANGE,function(){var e=t.$player.getDuration();t.duration=$(e)})}},xt=Lt,jt=(a("5311"),Object(yt["a"])(xt,At,St,!1,null,null,null)),Tt=jt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-control volume-control"},[a("div",{staticClass:"btn-control btn-volume"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23.542",height:"23",viewBox:"0 0 23.542 23"}},[a("path",{attrs:{"data-name":"15",fill:"#fff",d:"M0 5.5h7v12H0z"}}),a("path",{attrs:{"data-name":"3",d:"M.5 11.5L12.5 0v23z",fill:"#fff"}}),a("g",{attrs:{"data-name":"12 1",fill:"none",stroke:"#fff","stroke-width":"1.5"}},[a("path",{attrs:{"data-name":"2",d:"M15.787 8.349a2.89 2.89 0 0 1 3.04 3.126 2.763 2.763 0 0 1-3.142 2.833","stroke-width":"1.50021"}}),a("path",{attrs:{"data-name":"3",d:"M16.052 4.807s6.917-.147 6.61 6.796-6.83 6.16-6.83 6.16","stroke-width":"1.50021"}})])])]),a("div",{staticClass:"btn-control btn-mute"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"48",viewBox:"0 0 36 48"}},[a("g",{attrs:{transform:"translate(-950 -398)"}},[a("rect",{attrs:{width:"12",height:"48",transform:"translate(950 398)",fill:"#fff"}}),a("rect",{attrs:{width:"12",height:"48",transform:"translate(974 398)",fill:"#ff6060"}})])])]),t._m(0)])},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-control-panel"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"volume-current"},[a("div",{staticClass:"thumb-drag"})])]),a("div",{staticClass:"volume-info"},[t._v("50%")])])}],It={name:"Volume",props:{visible:Boolean},mixins:[dt],data:function(){return{panelShow:!1}},methods:{toggle:function(){this.panelShow=!this.panelShow,console.log(this.panelShow)}}},zt=It,Ht=(a("42e9"),Object(yt["a"])(zt,Rt,Dt,!1,null,null,null)),Nt=Ht.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-control"},[t.fullscreen?t._e():a("div",{staticClass:"btn-control btn-fullscreen",on:{click:t.enterFullscreen}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"20",viewBox:"0 0 28 20"}},[a("g",{attrs:{fill:"#fff"}},[a("g",{attrs:{"data-name":"6 7"}},[a("g",{attrs:{"data-name":"4 1"}},[a("path",{attrs:{"data-name":"7",d:"M16 0h10v2H16z"}}),a("path",{attrs:{"data-name":"8",d:"M26 0h2v6h-2z"}})]),a("g",{attrs:{"data-name":"5 1"}},[a("path",{attrs:{"data-name":"9",d:"M18 18h10v2H18z"}}),a("path",{attrs:{"data-name":"10",d:"M26 14h2v6h-2z"}})])]),a("g",{attrs:{"data-name":"6 8"}},[a("g",{attrs:{"data-name":"4 1"}},[a("path",{attrs:{"data-name":"7",d:"M12 20H2v-2h10z"}}),a("path",{attrs:{"data-name":"8",d:"M2 20H0v-6h2z"}})]),a("g",{attrs:{"data-name":"5 1"}},[a("path",{attrs:{"data-name":"9",d:"M10 2H0V0h10z"}}),a("path",{attrs:{"data-name":"10",d:"M2 6H0V0h2z"}})])])])]),a("div",{staticClass:"tips"},[t._v("进入全屏")])]),a("div",{staticClass:"btn-control btn-off-fullscreen",on:{click:t.cancelFullscreen}},[t.fullscreen?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"18",viewBox:"0 0 25 18"}},[a("g",{attrs:{fill:"#fff"}},[a("g",{attrs:{"data-name":"6 9"}},[a("g",{attrs:{"data-name":"4 1"}},[a("path",{attrs:{"data-name":"7",d:"M15 5h10v2H15z"}}),a("path",{attrs:{"data-name":"8",d:"M15 0h2v6h-2z"}})]),a("g",{attrs:{"data-name":"5 1"}},[a("path",{attrs:{"data-name":"9",d:"M15 12h10v2H15z"}}),a("path",{attrs:{"data-name":"10",d:"M15 12h2v6h-2z"}})])]),a("g",{attrs:{"data-name":"6 10"}},[a("g",{attrs:{"data-name":"4 1"}},[a("path",{attrs:{"data-name":"7",d:"M10 14H0v-2h10z"}}),a("path",{attrs:{"data-name":"8",d:"M10 18H8v-6h2z"}})]),a("g",{attrs:{"data-name":"5 1"}},[a("path",{attrs:{"data-name":"9",d:"M10 6H0V4h10z"}}),a("path",{attrs:{"data-name":"10",d:"M10 6H8V0h2z"}})])])])]):t._e(),a("span",{staticClass:"tips"},[t._v("退出全屏")])])])},Ft=[],Ut={name:"Fullscreen",mixins:[dt],props:{visible:Boolean}},Yt=Ut,Vt=(a("156e"),Object(yt["a"])(Yt,Bt,Ft,!1,null,null,null)),Gt=Vt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-control settings-control"},[a("div",{staticClass:"btn-control btn-settings",on:{click:t.toggle}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"31.971",height:"31.971",viewBox:"0 0 31.971 31.971"}},[a("g",{attrs:{"data-name":"7",transform:"translate(6.985 6.985)",fill:"none",stroke:"#fff","stroke-width":"5"}},[a("circle",{attrs:{cx:"9",cy:"9",r:"9",stroke:"none"}}),a("circle",{attrs:{cx:"9",cy:"9",r:"6.5"}})]),a("g",{attrs:{"data-name":"15 10",fill:"#fff"}},[a("g",{attrs:{"data-name":"14 1"}},[a("g",{attrs:{"data-name":"13 1"}},[a("path",{attrs:{"data-name":"17",d:"M13.985 3.985h4v3h-4z"}}),a("path",{attrs:{"data-name":"4",d:"M15.985 3.985l3 4h-6z"}})]),a("g",{attrs:{"data-name":"13 2"}},[a("path",{attrs:{"data-name":"17",d:"M17.985 27.985h-4v-3h4z"}}),a("path",{attrs:{"data-name":"4",d:"M15.985 27.985l-3-4h6z"}})])]),a("g",{attrs:{"data-name":"14 2"}},[a("g",{attrs:{"data-name":"13 1"}},[a("path",{attrs:{"data-name":"17",d:"M23.056 6.085l2.829 2.829-2.122 2.12-2.828-2.828z"}}),a("path",{attrs:{"data-name":"4",d:"M24.47 7.5l-.707 4.95-4.242-4.244z"}})]),a("g",{attrs:{"data-name":"13 2"}},[a("path",{attrs:{"data-name":"17",d:"M8.914 25.884l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),a("path",{attrs:{"data-name":"4",d:"M7.5 24.47l.707-4.95 4.243 4.243z"}})])])]),a("g",{attrs:{"data-name":"15 11",fill:"#fff"}},[a("g",{attrs:{"data-name":"14 1"}},[a("g",{attrs:{"data-name":"13 1"}},[a("path",{attrs:{"data-name":"17",d:"M23.056 6.086l2.828 2.828-2.12 2.122-2.83-2.829z"}}),a("path",{attrs:{"data-name":"4",d:"M24.47 7.5l-.707 4.95-4.242-4.243z"}})]),a("g",{attrs:{"data-name":"13 2"}},[a("path",{attrs:{"data-name":"17",d:"M8.914 25.885l-2.828-2.828 2.12-2.122 2.83 2.829z"}}),a("path",{attrs:{"data-name":"4",d:"M7.5 24.47l.707-4.949 4.242 4.243z"}})])]),a("g",{attrs:{"data-name":"14 2"}},[a("g",{attrs:{"data-name":"13 1"}},[a("path",{attrs:{"data-name":"17",d:"M27.985 13.985v4h-3v-4z"}}),a("path",{attrs:{"data-name":"4",d:"M27.985 15.985l-4 3v-6z"}})]),a("g",{attrs:{"data-name":"13 2"}},[a("path",{attrs:{"data-name":"17",d:"M3.985 17.985v-4h3v4z"}}),a("path",{attrs:{"data-name":"4",d:"M3.985 15.985l4-3v6z"}})])])]),a("g",{attrs:{"data-name":"15 12",fill:"#fff"}},[a("g",{attrs:{"data-name":"14 1"}},[a("g",{attrs:{"data-name":"13 1"}},[a("path",{attrs:{"data-name":"17",d:"M27.985 13.985v4h-3v-4z"}}),a("path",{attrs:{"data-name":"4",d:"M27.985 15.985l-4 3v-6z"}})]),a("g",{attrs:{"data-name":"13 2"}},[a("path",{attrs:{"data-name":"17",d:"M3.985 17.985v-4h3v4z"}}),a("path",{attrs:{"data-name":"4",d:"M3.985 15.985l4-3v6z"}})])]),a("g",{attrs:{"data-name":"14 2"}},[a("g",{attrs:{"data-name":"13 1"}},[a("path",{attrs:{"data-name":"17",d:"M25.885 23.056l-2.829 2.829-2.12-2.122 2.828-2.828z"}}),a("path",{attrs:{"data-name":"4",d:"M24.47 24.47l-4.95-.707 4.244-4.242z"}})]),a("g",{attrs:{"data-name":"13 2"}},[a("path",{attrs:{"data-name":"17",d:"M6.086 8.914l2.828-2.828 2.122 2.12-2.829 2.83z"}}),a("path",{attrs:{"data-name":"4",d:"M7.5 7.5l4.95.707-4.243 4.243z"}})])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.panelShow,expression:"panelShow"}],staticClass:"btn-control-panel"},[a("ul",[a("li",[a("span",{staticClass:"item-name"},[t._v("\n          "+t._s(t.$t("dashboard.settings.autoplay"))+"\n        ")]),a("div",{staticClass:"item-control"},[a("widgets-switch")],1)]),a("li",[a("span",{staticClass:"item-name"},[t._v(t._s(t.$t("dashboard.settings.loop")))]),a("div",{staticClass:"item-control"},[a("widgets-switch")],1)]),t._m(0),t._m(1)])])])},Jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"item-name"},[t._v("Speed")]),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"item-name"},[t._v("Resolution")]),a("div")])}],Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-switch",class:{open:t.isOpen},on:{click:t.toggle}})},Wt=[],Qt={name:"switch",props:{change:Function},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,"function"===typeof this.change&&this.change(this.isOpen)}}},Xt=Qt,Zt=(a("1b90"),Object(yt["a"])(Xt,Kt,Wt,!1,null,null,null)),te=Zt.exports,ee={name:"Settings",props:{visible:Boolean},mixins:[dt],components:{"widgets-switch":te},data:function(){return{panelShow:!1}},methods:{toggle:function(){this.panelShow=!this.panelShow}}},ae=ee,ne=(a("aa54"),Object(yt["a"])(ae,qt,Jt,!1,null,null,null)),re=ne.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"vue-core-video-player-control",on:{click:t.requestPictureInPicture}},[a("div",{staticClass:"btn-control btn-pip"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"16",viewBox:"0 0 28 16"}},[a("g",{attrs:{"data-name":"6 13"}},[a("g",{attrs:{"data-name":"5 1",fill:"#fff"}},[a("path",{attrs:{"data-name":"9",d:"M18 14h10v2H18z"}}),a("path",{attrs:{"data-name":"10",d:"M26 9h2v6h-2z"}})])]),a("g",{attrs:{"data-name":"6 14",fill:"#fff"}},[a("g",{attrs:{"data-name":"4 1"}},[a("path",{attrs:{"data-name":"7",d:"M12 16H2v-2h10z"}}),a("path",{attrs:{"data-name":"8",d:"M2 16H0V6h2z"}})]),a("path",{attrs:{"data-name":"41",d:"M28 2H0V0h28z"}})])]),a("div",{staticClass:"tips"},[t._v(t._s(t.$t("dashboard.btn.pip")))])])]):t._e()},ie=[],oe=function(){if("pictureInPictureEnabled"in document)return ture;var t=document.createElement("video");return!(!t.requestPictureInPicture||"function"!==typeof t.requestPictureInPicture)},le={name:"PictureInPicture",mixins:[dt],props:{visible:Boolean},data:function(){return{show:!1}},created:function(){oe&&(this.show=!0)},methods:{requestPictureInPicture:function(){this.$player.requestPictureInPicture()}}},ce=le,ue=(a("1b6f"),Object(yt["a"])(ce,se,ie,!1,null,null,null)),de=ue.exports,fe={name:"Controls",components:{"play-pause-cntrol":$t,"time-span":Tt,"volume-control":Nt,"fullscreen-control":Gt,"settings-control":re,"picture-in-picture":de},props:{visible:Boolean}},he=fe,pe=(a("7fc5"),Object(yt["a"])(he,wt,Et,!1,null,null,null)),ve=pe.exports,me={name:"Dashboard",components:{Progress:_t,Controls:ve},props:{visible:Boolean}},ge=me,ye=(a("cc1d"),Object(yt["a"])(ge,ft,ht,!1,null,null,null)),be=ye.exports,_e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-core-video-player-layers"},[a("cover-layer"),a("play-pause-layer"),a("logo-layer"),a("title-layer"),a("loading-layer"),a("error-layer")],1)},we=[],Ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-layer title-layer"},[a("div",{staticClass:"video-title"},[t._v(t._s(t.title))])])},Oe=[],Ce={name:"CoverLayer",props:{visible:Boolean},data:function(){return{title:"《5 Centimeters per Second 》--- Makoto Shinkai"}}},Pe=Ce,Me=(a("b72f"),Object(yt["a"])(Pe,Ee,Oe,!1,null,null,null)),ke=Me.exports,$e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-layer logo-layer"},[a("div",{staticClass:"logo-wrap"},[a("img",{attrs:{alt:"logo",src:t.src}})])])},Ae=[],Se={name:"CoverLayer",props:{visible:Boolean},data:function(){return{src:"/logo-white.png"}}},Le=Se,xe=(a("56fb"),Object(yt["a"])(Le,$e,Ae,!1,null,null,null)),je=xe.exports,Te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-layer play-pause-layer"},[a("div",{staticClass:"btn-control btn-play"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"41",height:"47",viewBox:"0 0 41 47"}},[a("path",{attrs:{d:"M23.5,0,47,41H0Z",transform:"translate(41) rotate(90)",fill:"#ff6060"}})])]),a("div",{staticClass:"btn-control btn-pause"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"48",viewBox:"0 0 36 48"}},[a("g",{attrs:{transform:"translate(-950 -398)"}},[a("rect",{attrs:{width:"12",height:"48",transform:"translate(950 398)",fill:"#ff6060"}}),a("rect",{attrs:{width:"12",height:"48",transform:"translate(974 398)",fill:"#ff6060"}})])])])])},Re=[],De={name:"PlayPauseLayer",props:{visible:Boolean}},Ie=De,ze=(a("4447"),Object(yt["a"])(Ie,Te,Re,!1,null,null,null)),He=ze.exports,Ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Be=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-layer cover-layer"},[a("img",{attrs:{alt:"video cover",src:"/cover01.jpg"}})])}],Fe={name:"CoverLayer",props:{visible:Boolean}},Ue=Fe,Ye=(a("9983"),Object(yt["a"])(Ue,Ne,Be,!1,null,null,null)),Ve=Ye.exports,Ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-layer loading-layer"},[a("div",{staticClass:"loading-wrap"},[a("div",{staticClass:"h5-layer-loading"},[a("svg",{staticClass:"spinner",attrs:{width:"100%",height:"100%",viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("linearGradient",{attrs:{id:"grad",gradientUnits:"objectBoundingBox",gradientTransform:"rotate(135 0.5 0.5)"}},[a("stop",{attrs:{offset:"0%","stop-color":"#ff6060"}}),a("stop",{attrs:{offset:"100%","stop-color":"#fa3b3b"}})],1)],1),a("circle",{staticClass:"path",attrs:{stroke:"url(#grad)","stroke-width":"10",fill:"none","stroke-linecap":"round",cx:"40",cy:"40",r:"30"}})])]),a("p",[t._v(t._s(t.$t("layers.loading.msg")))])])])},qe=[],Je={name:"LoadingLayer",props:{visible:Boolean},data:function(){return{src:"/logo-white.png"}}},Ke=Je,We=(a("b1ba"),Object(yt["a"])(Ke,Ge,qe,!1,null,null,null)),Qe=We.exports,Xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vcp-layer error-layer"},[a("div",{staticClass:"error-icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"194",height:"194",viewBox:"0 0 194 194"}},[a("g",{attrs:{"data-name":"组 4",transform:"translate(-850 -223)"}},[a("circle",{attrs:{"data-name":"椭圆 11",cx:"97",cy:"97",r:"97",transform:"translate(850 223)",fill:"#ff6060"}}),a("g",{attrs:{"data-name":"矩形 47",fill:"#fff",stroke:"#ccc"}},[a("path",{attrs:{stroke:"none",d:"M864 310h17v13h-17z"}}),a("path",{attrs:{fill:"none",d:"M864.5 310.5h16v12h-16z"}})]),a("g",{attrs:{"data-name":"组 5",fill:"#fff",stroke:"#707070"}},[a("g",{attrs:{"data-name":"矩形 48",transform:"translate(870 313)"}},[a("path",{attrs:{stroke:"none",d:"M0 0h1v2H0z"}}),a("rect",{attrs:{x:".5",y:".5",height:"1",fill:"none"}})]),a("g",{attrs:{"data-name":"矩形 49",transform:"translate(874 313)"}},[a("path",{attrs:{stroke:"none",d:"M0 0h1v2H0z"}}),a("rect",{attrs:{x:".5",y:".5",height:"1",fill:"none"}})])]),a("g",{attrs:{"data-name":"矩形 50",transform:"translate(872 317)",fill:"#fff",stroke:"#707070"}},[a("path",{attrs:{stroke:"none",d:"M0 0h1v2H0z"}}),a("rect",{attrs:{x:".5",y:".5",height:"1",fill:"none"}})]),a("g",{attrs:{"data-name":"矩形 51",transform:"translate(875 319)",fill:"#fff",stroke:"#707070"}},[a("path",{attrs:{stroke:"none",d:"M0 0h1v2H0z"}}),a("rect",{attrs:{x:".5",y:".5",height:"1",fill:"none"}})]),a("path",{attrs:{"data-name":"路径 10",d:"M879.5 328.5s8.228 10.764 0 17.566 11.856 7.948 11.856 7.948 1.681 6.365-5.264 15.856 20.577-1.755 20.577-1.755l19.186 9.7L939.97 357.3",fill:"none",stroke:"#000","stroke-width":"2"}}),a("g",{attrs:{"data-name":"矩形 52",transform:"translate(869 319)",fill:"#fff",stroke:"#707070"}},[a("path",{attrs:{stroke:"none",d:"M0 0h1v2H0z"}}),a("rect",{attrs:{x:".5",y:".5",height:"1",fill:"none"}})]),a("g",{attrs:{"data-name":"矩形 53",fill:"#fff",stroke:"#000","stroke-width":"2"}},[a("path",{attrs:{stroke:"none",d:"M910 297h112v70H910z"}}),a("path",{attrs:{fill:"none",d:"M911 298h110v68H911z"}})]),a("g",{attrs:{"data-name":"组 6"}},[a("path",{attrs:{"data-name":"矩形 54",d:"M932 372h67v3h-67z"}}),a("path",{attrs:{"data-name":"矩形 56",d:"M939 367h2v5h-2z"}}),a("path",{attrs:{"data-name":"矩形 57",d:"M990 367h2v5h-2z"}})]),a("g",{attrs:{"data-name":"组 8"}},[a("path",{attrs:{"data-name":"矩形 58",d:"M876.117 329.526l6.344-2.958 1.268 2.719-6.344 2.958z"}}),a("path",{attrs:{"data-name":"矩形 59",fill:"#ccc",d:"M876.178 327.291l.906-.423.845 1.813-.906.423z"}}),a("path",{attrs:{"data-name":"路径 9",d:"M879.803 325.6l.906-.422.846 1.813-.907.422z",fill:"#ccc"}})]),a("text",{attrs:{"data-name":"Error !",transform:"translate(923 322)",fill:"#ff6060","font-size":"18","font-family":"ArialMT, Arial"}},[a("tspan",{attrs:{x:"0",y:"16"}},[t._v("Error !")])])])])]),a("div",{staticClass:"error-msg-wrap"},[a("h2",[t._v(t._s(t.$t("layers.error.title")))]),a("p",{staticClass:"error-msg"},[t._v(t._s(t.errMsg))])])])},Ze=[],ta={name:"CoverLayer",props:{visible:Boolean},data:function(){return{errMsg:"Cannot find video source"}}},ea=ta,aa=(a("f64c"),Object(yt["a"])(ea,Xe,Ze,!1,null,null,null)),na=aa.exports,ra={name:"Layers",components:{PlayPauseLayer:He,CoverLayer:Ve,LogoLayer:je,TitleLayer:ke,LoadingLayer:Qe,ErrorLayer:na},props:{visible:Boolean}},sa=ra,ia=(a("2c1a"),Object(yt["a"])(sa,_e,we,!1,null,null,null)),oa=ia.exports;function la(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function ca(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?la(a,!0).forEach(function(e){Object(c["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):la(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var ua={name:"VueCoreVideoPlayer",mixins:[dt],components:{Dashboard:be,Layers:oa},props:{src:String,lang:String,controls:Boolean},beforeCreate:function(){m.setLocale()},mounted:function(){this.$player=this.videoCore=it(ca({},this.$props,{videoEl:this.$refs["vcp-video"],el:this.$refs["vcp-el"],eventEmitter:{on:this.on,emit:this.emit}})),this._coreID=this.videoCore.id,this.emit(y.LIFECYCYLE_INITING,this.$player)}},da=ua,fa=(a("04fa"),Object(yt["a"])(da,o,l,!1,null,null,null)),ha=fa.exports,pa={name:"app",components:{VueCoreVideoPlayer:ha}},va=pa,ma=(a("034f"),Object(yt["a"])(va,s,i,!1,null,null,null)),ga=ma.exports,ya={install:function(t){t.prototype.$t=function(t){return m.t(t)}}},ba=ya;a("add7");r["a"].config.productionTip=!1,r["a"].use(ba),new r["a"]({render:function(t){return t(ga)}}).$mount("#app")},"56fb":function(t,e,a){"use strict";var n=a("84c9"),r=a.n(n);r.a},"5eb4":function(t,e,a){},"64a4":function(t,e,a){},"64a9":function(t,e,a){},"6a87":function(t){t.exports=JSON.parse('{"dashboard":{"settings":{"autoplay":"Autoplay","loop":"loop"}}}')},"76a6":function(t,e,a){},"7fc5":function(t,e,a){"use strict";var n=a("2a4a"),r=a.n(n);r.a},"84c9":function(t,e,a){},9983:function(t,e,a){"use strict";var n=a("47cc"),r=a.n(n);r.a},"9f79":function(t,e,a){},aa54:function(t,e,a){"use strict";var n=a("caf3"),r=a.n(n);r.a},add7:function(t,e,a){},af9d:function(t,e,a){},b1ba:function(t,e,a){"use strict";var n=a("9f79"),r=a.n(n);r.a},b72f:function(t,e,a){"use strict";var n=a("bd15"),r=a.n(n);r.a},bd15:function(t,e,a){},caf3:function(t,e,a){},cc0d:function(t,e,a){},cc1d:function(t,e,a){"use strict";var n=a("64a4"),r=a.n(n);r.a},d39e:function(t,e,a){},d658:function(t,e,a){"use strict";var n=a("cc0d"),r=a.n(n);r.a},e312:function(t){t.exports=JSON.parse('{"dashboard":{"btn":{"play":"Play","pause":"Pause","fullscreen":"Full screen","exitFullscreen":"Exit Fullscreen","mute":"Mute","unmute":"Unmute","pip":"Picture-in-Picture"},"settings":{"autoplay":"Autoplay","loop":"Loop","speed":"Speed","resolution":"Resolution"}},"layers":{"error":{"title":"(O_O)?  Error!"},"loading":{"msg":"Loading ..."}}}')},f201:function(t){t.exports=JSON.parse('{"dashboard":{"settings":{"autoplay":"自动播放","loop":"循环播放"}}}')},f64c:function(t,e,a){"use strict";var n=a("3e27"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b6ae607e.js.map