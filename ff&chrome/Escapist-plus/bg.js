chrome.extension.onRequest.addListener(
  function(req) {
    if (req.nuke) {
      chrome.windows.getCurrent(function(currentWindow) {
      chrome.tabs.create({ selected:true,url:'chrome://newtab'})
      chrome.tabs.query({active: false, pinned:false, windowId: currentWindow.id}, function(tabs) {
        var tabIds = new Array(tabs.length);
        for (var i = 0; i < tabs.length; i++)
          tabIds[i] = tabs[i].id;
        chrome.tabs.remove(tabIds);
      });
    });
    }
  }
);