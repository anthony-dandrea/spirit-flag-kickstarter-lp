// GA init
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-51350148-2', 'auto');
ga('send', 'pageview');

////////////////////
// Event listener
////////////////////
(function() {
  var eventElements = document.querySelectorAll('[data-ga]');
  for (var i = 0; i < eventElements.length; i++) {
    var elem = eventElements[i];
    elem.addEventListener('click', function(e) {
      if (window.location.hostname === 'localhost') {
        console.log('GA TEST', 'send', 'event', this.getAttribute('data-ga-category'), 'btnclick', this.getAttribute('data-ga'));
      } else {
        ga('send', 'event', e.target.getAttribute('data-ga-category'), 'btnclick', e.target.getAttribute('data-ga'));
      }
    });
  }
})();
