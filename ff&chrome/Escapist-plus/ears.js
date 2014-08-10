window.addEventListener("keyup", function(e) {
  if ( e.keyCode == 27 ) {
    chrome.extension.sendRequest({nuke: true});
  }
}, false);