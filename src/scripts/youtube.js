// // da button
// var ytButton = document.getElementById('play-youtube');
// // remove da btn func
// function removeYTButton() {
//   var ytButtonMaybe = document.getElementById('play-youtube');
//   if (ytButtonMaybe) {
//     ytButton.parentNode.removeChild(ytButton);
//   }
// }
// // safari fucks it all up so we just remove the button
// if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
//   removeYTButton();
// }
// // load youtubery async
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// // this shit needs to be global apparently
// var player;
// function onPlayerReady() {
//   var ytButton = document.getElementById('play-youtube');
//   ytButton.addEventListener('click', function() {
//     player.playVideo();
//     ytButton.parentNode.removeChild(ytButton);
//     if (window.isTesting || sendEvt) {
//       console.log('GA TEST', 'send', 'event', 'video', 'btnclick', 'pressPlayVideo');
//     } else {
//       ga('send', 'event', 'video', 'btnclick', 'pressPlayVideo');
//     }
//   });
// }
// function onPlayerStateChange() {
//   removeYTButton();
// }
// window.onYouTubePlayerAPIReady = function() {
//   player = new YT.Player('yt-video', {
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
