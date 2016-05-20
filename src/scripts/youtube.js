// load youtubery async
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// this shit needs to be global apparently
var player;
function onPlayerReady() {
  var playButton = document.getElementById('play-youtube');
  playButton.addEventListener('click', function() {
    player.playVideo();
    playButton.parentNode.removeChild(playButton);
    if (window.isTesting || sendEvt) {
      console.log('GA TEST', 'send', 'event', 'video', 'btnclick', 'pressPlayVideo');
    } else {
      ga('send', 'event', 'video', 'btnclick', 'pressPlayVideo');
    }
  });
}
function onYouTubePlayerAPIReady() {
  player = new YT.Player('yt-video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}
