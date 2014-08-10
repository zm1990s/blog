//Minimize on start and close class
var mosc_480adee0 = new function(){
    this.preferencesManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	
	//Minimizes the window
	this.initMinimize = function(){
		window.minimize();
	};
	
	//Add delay to minmize on start up
	this.initDelayMinimize = function(){
		setTimeout(mosc_480adee0.initMinimize, mosc_480adee0.preferencesManager.getIntPref("extensions.{480adee0-f020-4fef-917d-b05502b17aaf}.initDelay"));
	};
	
	//Minimizes on close and prevents close
	this.minimizeOnClose = function(e){
		if(window.windowState.valueOf() != 2 && mosc_480adee0.preferencesManager.getBoolPref("extensions.{480adee0-f020-4fef-917d-b05502b17aaf}.minimizeOnClose")  == true)
		{
		while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
		  gBrowser.removeCurrentTab();
		  window.minimize();
			e.preventDefault();
		}
	};
	
	//Minimizes on Esc-press
	this.minimizeOnEsc = function(e){
		if(e.keyCode == 27 && mosc_480adee0.preferencesManager.getBoolPref("extensions.{480adee0-f020-4fef-917d-b05502b17aaf}.minimizeOnEsc")  == true)
		{
		  
			while( gBrowser.visibleTabs.length >1) {
			  
			gBrowser.removeCurrentTab();
}
			gBrowser.removeCurrentTab();
			e.preventDefault();
		}
	};
}

//Listeners
// - Start-up
if(mosc_480adee0.preferencesManager.getBoolPref("extensions.{480adee0-f020-4fef-917d-b05502b17aaf}.minimizeOnStart") == true)
{
	window.addEventListener("load", mosc_480adee0.initDelayMinimize, false);
}

// - Close
window.addEventListener("close", mosc_480adee0.minimizeOnClose, false);

// - Esc-press
window.addEventListener("keypress", mosc_480adee0.minimizeOnEsc, false);

