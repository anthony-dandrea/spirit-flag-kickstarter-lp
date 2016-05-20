// initialize parallax library
(function() {
  var scene = document.getElementById('parallax-scene');
  var parallax = new Parallax(scene);
})();

// handle bg sizing
(function() {
  var bg = document.getElementsByClassName('parallax-bg')[0];
  var body = document.body;
  var html = document.documentElement;
  function setHeight() {
    var windowHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    bg.style.height = windowHeight+'px';
  }
  // This is fucking dumb but it doesn't correctly resize all of the time first try
  window.addEventListener('resize', setHeight);
  document.addEventListener('DOMContentLoaded', setHeight);
  setTimeout(setHeight, 500);
  setInterval(setHeight, 1000);
  setHeight();
})();
