//Minimize on start and close class
var mosc_028515da = new function(){
    this.preferencesManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	
	//Minimizes the window
	this.initMinimize = function(){
		window.minimize();
	};
	
	
	//close all tabs and then open a new blank tab,then Minimize if you hit "close button"
	this.minimizeOnClose = function(e){
	
	
	  
	  
		if(window.windowState.valueOf() != 2 )
		{

	 
	opt1 =  mosc_028515da.preferencesManager.getIntPref("setup.minimizeOnClose");
switch (opt1)
{
case 0:

  break;
case 1:
	window.minimize()
	e.preventDefault();
  break;
case 2:
		while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
var home = 'about:newtab'

 gBrowser.addTab(home);
gBrowser.removeCurrentTab();
		  window.minimize();
			e.preventDefault();
  break;
case 3:
{
  		while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
var prefBranch = Components.classes["@mozilla.org/preferences-service;1"].
  getService(Components.interfaces.nsIPrefBranch);
var home = prefBranch.getCharPref("browser.startup.homepage");
 gBrowser.addTab(home);
gBrowser.removeCurrentTab();
		  window.minimize();
			e.preventDefault();
		};
  break;
case 4:

		while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
var home = 'about:blank'

 gBrowser.addTab(home);
gBrowser.removeCurrentTab();
		  window.minimize();
			e.preventDefault();
  break;
} 
		  
		}
	};

	
	//close all tabs on Esc-press
	this.closeAllTabOnEsc = function(e){
	  if(e.keyCode == 27 ){
	   opt2 = mosc_028515da.preferencesManager.getIntPref("setup.closeAllTabOnEsc");		      
switch (opt2)
{
case 0:
  break;
case 1:
gBrowser.removeCurrentTab();
e.preventDefault();
  break;
case 2:
		while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
var home = 'about:newtab'

gBrowser.addTab(home);
gBrowser.removeCurrentTab();
e.preventDefault();
  break;
case 3:
{	while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
var prefBranch = Components.classes["@mozilla.org/preferences-service;1"].
  getService(Components.interfaces.nsIPrefBranch);
var home = prefBranch.getCharPref("browser.startup.homepage");
 gBrowser.addTab(home);
gBrowser.removeCurrentTab();
			e.preventDefault();
		};
  break;
case 4:
		while( gBrowser.visibleTabs.length >1) {
gBrowser.removeCurrentTab();
}	
var home = 'about:blank'
gBrowser.addTab(home);
gBrowser.removeCurrentTab();
e.preventDefault();
  break;
}
	  }
};
}
//Listeners
// - Start-up
if(mosc_028515da.preferencesManager.getBoolPref("setup.minimizeOnStart") == true)
{
	window.addEventListener("load", mosc_028515da.initMinimize, false);
}

// - Close
window.addEventListener("close", mosc_028515da.minimizeOnClose, false);

// - Esc-press
window.addEventListener("keypress", mosc_028515da.closeAllTabOnEsc, false);
