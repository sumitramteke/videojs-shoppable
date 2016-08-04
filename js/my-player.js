(function(GBL, videojs) {
  GBL.player = videojs('my-video', {
    controls : true,
    autoplay: false,
    preload : "auto",
    height : "390",
    width : "690",
    poster : "https://e.invodo.com/media/lib/3/video/EPMH5U8B/1016_572_pre.jpg"
  })
  .src([
    { 
      type: "video/mp4", 
      src: "https://e.invodo.com/media/lib/3/video/EPMH5U8B/1016_572_h264_aac.mp4" 
    }
  ]);

  GBL.player.on('play', function() {
   GBL.recordEvent(GBL.vidActions.play, 'Duration: ' + GBL.player.currentTime()  + ' second(s) ') 
  });

  GBL.player.on('ended', function() {
   GBL.recordEvent(GBL.vidActions.ended) 
  });

  GBL.player.on('pause', function() {
   GBL.recordEvent(GBL.vidActions.pause, 'Duration: ' + GBL.player.currentTime()  + ' second(s) ') 
  });

  GBL.player.on('seeked', function() {
   GBL.recordEvent(GBL.vidActions.seeked, 'Duration: ' + GBL.player.currentTime()  + ' second(s) ') 
  });

  GBL.player.on('fullscreenchange', function() {
   GBL.recordEvent(GBL.vidActions.fullscreenchange, 'Duration: ' + GBL.player.currentTime()  + ' second(s) ') 
  });

  GBL.player.on('volumechange', function() {
   GBL.recordEvent(GBL.vidActions.volumechange, 'Duration: ' + GBL.player.currentTime()  + ' second(s) ') 
  });
}(window.GBL, window.videojs));