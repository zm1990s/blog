var groupOpenPlusoption = {
  showPrefsValues: function() {
     var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	//	elem = document.getElementById("closeOther");
	//	elem.value =  prefs.getCharPref("extensions.groupopenplus.urls");
		elem = document.getElementById("warnonClose");
		elem.checked =  !prefs.getBoolPref("browser.tabs.warnOnCloseOtherTabs");
		elem = document.getElementById("closeOther");
		elem.checked =  prefs.getBoolPref("extensions.groupopenplus.closeother");
    },

	saveOptions: function() { 
	    var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	elem = document.getElementById("urls");
	 prefs.setCharPref("extensions.groupopenplus.urls", elem.value);
	  elem = document.getElementById("closeOther");
	  prefs.setBoolPref("extensions.groupopenplus.closeother", elem.checked);
	  elem = document.getElementById("warnonClose");
	  prefs.setBoolPref("browser.tabs.warnOnCloseOtherTabs", !elem.checked);
	  window.close();
	}
};
