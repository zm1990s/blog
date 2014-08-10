var MinimizeOptions = {
  showPrefsValues: function() {
     var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
     
		elem = document.getElementById("warnonClose");
		elem.checked =  !prefs.getBoolPref("browser.tabs.warnOnCloseOtherTabs");
    },

	saveOptions: function() { 
	    var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);	
	  elem = document.getElementById("warnonClose");
	  prefs.setBoolPref("browser.tabs.warnOnCloseOtherTabs", !elem.checked);

	}
};
