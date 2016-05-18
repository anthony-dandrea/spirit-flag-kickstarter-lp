// reset for dev
// localStorage.removeItem('socialComplete');

// Tracks social media shares to unlock discount code
(function() {
  var socialComplete = localStorage.socialComplete ? localStorage.getItem('socialComplete').split(',') : [];
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
    if (socialComplete.length >= 4) {
      // complete
      document.querySelectorAll('.unlocked')[0].classList.add('active');
      document.querySelectorAll('[data-discount-code]')[0].innerHTML = 'TESTCODE';
      // Send GA event
      if (window.location.hostname === 'localhost' || sendEvt) {
        console.log('GA TEST', 'send', 'event', 'social', 'btnclick', 'AllSocialClicked');
      } else {
        ga('send', 'event', 'social', 'btnclick', 'AllSocialClicked');
      }
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
