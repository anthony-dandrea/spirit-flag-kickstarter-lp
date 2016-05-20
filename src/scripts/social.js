// reset for dev
// localStorage.removeItem('socialComplete');

// Tracks social media shares to unlock discount code
(function() {
  var socialComplete = localStorage.socialComplete ? localStorage.getItem('socialComplete').split(',') : [];
  var socialStatus = document.getElementById('social-status');
  var socialBar = document.getElementById('social-bar');
  var minAmount = 4;
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
    if (socialComplete.length >= minAmount) {
      
      // update progress bar
      socialBar.style.width = '100%';
      // Send GA event
      if (window.location.hostname === 'localhost' || sendEvt) {
        console.log('GA TEST', 'send', 'event', 'social', 'btnclick', 'AllSocialClicked');
      } else {
        ga('send', 'event', 'social', 'btnclick', 'AllSocialClicked');
      }
    } else {
      debugger;
      // update progress text
      socialStatus.innerHTML = 'progress (' + socialComplete.length + '/' + minAmount + ')... ';
      // update progress bar
      socialBar.style.width = minAmount / socialComplete.length * 100 + '%';
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
