var groupOpen = {
	onload: function() {
		window.removeEventListener('load', groupOpen.onload, false);
var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var firstRun = prefs.getBoolPref('extensions.groupopen.firstRun');

		if (firstRun) {
				var toolbar = document.getElementById('nav-bar');
				if (!toolbar.currentSet.match('group-open')) {
						var newset = toolbar.currentSet.concat(',group-open');
						toolbar.currentSet = newset;
						toolbar.setAttribute('currentset', newset);
						document.persist(toolbar.id, "currentset");
				}
				prefs.setBoolPref('extensions.groupopen.firstRun', false);
		}
	},


	openLink: function(event) {

		var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var closeother = prefs.getBoolPref('extensions.groupopen.closeother');
	  var urls = prefs.getCharPref('extensions.groupopen.urls');
	//  alert(urls);
  var url=urls.split("\n");
  var i;

  if (closeother == true)
    {
  //   alert("hello");
        gBrowser.selectedTab = gBrowser.addTab(url[0]);
		      gBrowser.removeAllTabsBut(gBrowser.selectedTab);
      for (i=1; i< url.length ;i++){
	    gBrowser.addTab(url[i]);		
	};
  }

	else 
	{
	  for (i=0; i< url.length ;i++)
	    {
	  gBrowser.addTab(url[i]); 
	    }
	}; 
	}
};

window.addEventListener('load',groupOpen.onload,false)