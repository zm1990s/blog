var groupOpenPlus = {
  openconfig:function()
  {
     window.openDialog('chrome://groupopenplus/content/options.xul',"Multi tab", 'chrome,centerscreen,dependent');
  },
  closetabs:function()
  {
    var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
      	    var newtab = prefs.getCharPref("browser.newtab.url");
	      gBrowser.selectedTab = gBrowser.addTab(newtab);
		      gBrowser.removeAllTabsBut(gBrowser.selectedTab);
  },
    doit:function(url,closeother){
        var i;
      if (closeother == true)
    {
  //   alert("hello");
        gBrowser.selectedTab = gBrowser.addTab(url[1]);
		      gBrowser.removeAllTabsBut(gBrowser.selectedTab);
		      
      for (i=3; i< url.length ;i++){
	    gBrowser.addTab(url[i]);		
	};
  }

	else 
	{
	  for (i=1; i< url.length ;i++)
	    {
	  gBrowser.addTab(url[i]); 
	    }
	}; 
      
    },
	onload: function() {
		window.removeEventListener('load', groupOpenPlus.onload, false);
var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var firstRun = prefs.getBoolPref('extensions.groupopenplus.firstRun');

		if (firstRun) {
				var toolbar = document.getElementById('nav-bar');
				if (!toolbar.currentSet.match('group-open')) {
						var newset = toolbar.currentSet.concat(',group-open');
						toolbar.currentSet = newset;
						toolbar.setAttribute('currentset', newset);
						document.persist(toolbar.id, "currentset");
				}
				prefs.setBoolPref('extensions.groupopenplus.firstRun', false);
		}
	},


	openLink: function(choice) {
		var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

		var closeother = prefs.getBoolPref('extensions.groupopenplus.closeother');
	  var urls = prefs.getCharPref('extensions.groupopenplus.urls');
	//  alert(urls);
	  var all=urls.split("#");
	  var url=all[choice].trim();
	//  alert(url);	  
 var url=url.split("\n");
//groupOpenPlus.closetabs();
 groupOpenPlus.doit(url,closeother);

	

	}
};

window.addEventListener('load',groupOpenPlus.onload,false)