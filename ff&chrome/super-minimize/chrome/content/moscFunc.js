//Minimize on start and close class
var mosc_028515da = new function(){
    this.preferencesManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	//Minimizes the window
	this.initMinimize = function(){
		window.minimize();
	};
	
	//close all tabs and then open a new blank tab,then Minimize if you hit "close button"
	this.minimizeOnClose = function(e){
	//6 options:
	// 0, do nothing ,quit 
	// 1, minimize
	//2-5 close all tabs and go to <newtab, homepage, blank page,usercustom page>
	  
		if(window.windowState.valueOf() != 2 )
		{

	 
	opt1 =  mosc_028515da.preferencesManager.getIntPref("extensions.ctb.minimizeOnClose");
switch (opt1)
{
case 0:

  break;
case 1:
	window.minimize()
	e.preventDefault();
  break;
case 2:
		
var prefs = Components.classes["@mozilla.org/preferences-service;1"].
 getService(Components.interfaces.nsIPrefBranch)
var home = prefs.getCharPref("browser.newtab.url");
gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
		  window.minimize();
			e.preventDefault();
  break;
case 3:
{
	var home=  gHomeButton.getHomePage();
gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);

		  window.minimize();
			e.preventDefault();
		};
  break;
case 4:

var home = 'about:blank'
gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
		  window.minimize();
			e.preventDefault();
  break;
case 5:
  var home=mosc_028515da.preferencesManager.getCharPref("extensions.ctb.userHomePage");
  gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
		  window.minimize();
			e.preventDefault();
  break;
  
} 
		  
		}
	};

	
	//close all tabs on Esc-press
	this.closeAllTabOnEsc = function(e){
	//7 options:
	// 0, do nothing
	// 1, close current page
	//2-4 close all tabs and go to <newtab, homepage, blank page
	//5  open usercustom page>
        //6  close all tabs and go to custom page
	  
	  if( e.keyCode == 27 &&mosc_028515da.preferencesManager.getBoolPref("extensions.ctb.enableEsc") == true ||e.keyCode == 46 &&mosc_028515da.preferencesManager.getBoolPref("extensions.ctb.enableDelete") == true){
	   opt2 = mosc_028515da.preferencesManager.getIntPref("extensions.ctb.closeAllTabOnEsc");		      
switch (opt2)
{
case 0:
  break;
case 1:
gBrowser.removeCurrentTab();
e.preventDefault();
  break;
case 2:
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].
 getService(Components.interfaces.nsIPrefBranch)
var home = prefs.getCharPref("browser.newtab.url");
gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
e.preventDefault();
  break;
case 3:
{
  var home=  gHomeButton.getHomePage();
gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
			e.preventDefault();
		};
  break;
case 4:

var home = 'about:blank'
gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
e.preventDefault();

break;
  case 5:
  var home=mosc_028515da.preferencesManager.getCharPref("extensions.ctb.userHomePage");
  gBrowser.addTab(home);
			e.preventDefault();
  break;
  
  case 6:
 var home=mosc_028515da.preferencesManager.getCharPref("extensions.ctb.userHomePage");
  gBrowser.selectedTab = gBrowser.addTab(home);
gBrowser.removeAllTabsBut(gBrowser.selectedTab);
			e.preventDefault();
  break;
  
}
	  }

};
}
//Listeners
// - Start-up
if(mosc_028515da.preferencesManager.getBoolPref("extensions.ctb.minimizeOnStart") == true)
{
	window.addEventListener("load", mosc_028515da.initMinimize, false);
}

// - Close
window.addEventListener("close", mosc_028515da.minimizeOnClose, false);

// - Esc-press

window.addEventListener("keypress", mosc_028515da.closeAllTabOnEsc, false);

