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

player.on('play', GBL.testScope);