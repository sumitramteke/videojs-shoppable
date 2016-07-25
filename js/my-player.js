var player = videojs('my-video', {
  controls : true,
  autoplay: false,
  preload : "auto",
  height : "270",
  width : "480",
  poster : "https://e.invodo.com/media/lib/77/video/QIR0GD91/1280_720_pre.jpg"
})
.src([
  { 
    type: "video/mp4", 
    src: "https://e.invodo.com/media/lib/77/video/QIR0GD91/1280_720_h264_aac.mp4" 
  }
]);

player.on('play', function() {
 GBL.recordEvent(GBL.vidActions.play, 'Duration: ' + player.currentTime()  + ' second(s) ') 
});

player.on('ended', function() {
 GBL.recordEvent(GBL.vidActions.ended) 
});

player.on('pause', function() {
 GBL.recordEvent(GBL.vidActions.pause, 'Duration: ' + player.currentTime()  + ' second(s) ') 
});

player.on('seeked', function() {
 GBL.recordEvent(GBL.vidActions.seeked, 'Duration: ' + player.currentTime()  + ' second(s) ') 
});

player.on('fullscreenchange', function() {
 GBL.recordEvent(GBL.vidActions.fullscreenchange, 'Duration: ' + player.currentTime()  + ' second(s) ') 
});

player.on('volumechange', function() {
 GBL.recordEvent(GBL.vidActions.volumechange, 'Duration: ' + player.currentTime()  + ' second(s) ') 
});
