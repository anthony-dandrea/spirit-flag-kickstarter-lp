// reset for dev
// localStorage.removeItem('socialComplete');

// Tracks social media shares to unlock discount code
(function() {
  var socialComplete = localStorage.socialComplete ? localStorage.getItem('socialComplete').split(',') : [];
  var socialStatus = document.getElementById('social-status');
  var socialBar = document.getElementById('social-bar');
  var minAmount = 4;
  var dc = 'SpiritFlagFam';
  function updateSocialComplete(e) {
    // add new social to list
    var attr = e.getAttribute('data-social');
    // don't add if repeat
    if (socialComplete.indexOf(attr) === -1) {
      socialComplete.push(attr);
      // update localStorage
      localStorage.setItem('socialComplete', socialComplete.join(','));
    }
    // Check if we're done after that share
    checkForComplete(false);
  }
  function checkForComplete(sendEvt) {
    var len = socialComplete.length;
    if (len >= minAmount) {
      // update progress text
      socialStatus.innerHTML = 'THANK YOU SO MUCH! Your coupon code is <span>'+dc+'</span>!';
      // update progress bar
      socialBar.style.width = '100%';
      // Send GA event
      if (window.isTesting || sendEvt) {
        console.log('GA TEST', 'send', 'event', 'social', 'btnclick', 'AllSocialClicked');
      } else {
        ga('send', 'event', 'social', 'btnclick', 'AllSocialClicked');
      }
      // add done class
      socialStatus.classList.add('done');
    } else {
      // create template
      var template = "<span>progress (0/"+minAmount+")...</span> four more shares until we're best friends";
      if (len === 1) {
        template = "<span>progress (1/"+minAmount+")...</span> three more shares until we become astronauts";
      } else if (len === 2) {
        template = "<span>progress (2/"+minAmount+")...</span> two more shares until Adam Sandler is funny again";
      } else if (len === 3) {
       template = "<span>progress (3/"+minAmount+")...</span> one more shares until cats rule the world";
      }
      // update progress text
      socialStatus.innerHTML = template;
      // update progress bar
      socialBar.style.width = len ? len / minAmount * 100 + '%' : '0%';
    }
  }
  // Run checkForComplete on load
  checkForComplete(true);
  // Add event listener to social buttons
  var socialBtns = document.querySelectorAll('[data-social]');
  for (var i = 0; i < socialBtns.length; i++) {
    var elem = socialBtns[i];
    elem.addEventListener('click', function() {
      updateSocialComplete(this);
    });
  }
})()
