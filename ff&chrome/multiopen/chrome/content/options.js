var groupOpenoption = {
  showPrefsValues: function() {
     var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	//	elem = document.getElementById("closeOther");
	//	elem.value =  prefs.getCharPref("extensions.groupopen.urls");
		elem = document.getElementById("warnonClose");
		elem.checked =  !prefs.getBoolPref("browser.tabs.warnOnCloseOtherTabs");
		elem = document.getElementById("closeOther");
		elem.checked =  prefs.getBoolPref("extensions.groupopen.closeother");

    },

	saveOptions: function() { 
	    var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	elem = document.getElementById("urls");
	 prefs.setCharPref("extensions.groupopen.urls", elem.value);
	  elem = document.getElementById("closeOther");
	  prefs.setBoolPref("extensions.groupopen.closeother", elem.checked);
	  elem = document.getElementById("warnonClose");
	  prefs.setBoolPref("browser.tabs.warnOnCloseOtherTabs", !elem.checked);
	   elem = document.getElementById("dely");
	  prefs.setIntPref("extensions.groupopen.delay", elem.value);
	  window.close();
	}
};
