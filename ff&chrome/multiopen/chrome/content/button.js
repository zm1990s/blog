var groupOpen = {
  closeotherandopen:function(url,delay)
      {
  //   alert("hello");
        gBrowser.selectedTab = gBrowser.addTab(url[0]);
		      gBrowser.removeAllTabsBut(gBrowser.selectedTab);
     /* var i;
      for (i=1; i< url.length ;i++){
	    gBrowser.addTab(url[i]);		
	};  */
var i = 1;
setInterval(function() {
                        
			
		//	alert(i);
			
                        if (i >= url.length) {
                            return;
			   
                        }
			gBrowser.addTab(url[i]);
			++i;
                    }, delay);return;

  },
  openurls:function(url,delay)
  {
    
    
           gBrowser.selectedTab = gBrowser.addTab(url[0]);
    var i=1;
setInterval(function() {
                        
			
		//	alert(i);
			
                        if (i >= url.length) {
                            return;
			   
                        }
			gBrowser.addTab(url[i]);
			++i;
                    }, delay);return;

	},

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
	switch (event.button){
	  
	  case 0:
		var closeother = prefs.getBoolPref('extensions.groupopen.closeother');
	  var urls = prefs.getCharPref('extensions.groupopen.urls');
	  var delay = prefs.getIntPref('extensions.groupopen.delay');
	//  alert(urls);
	  	  var url=urls.trim();
		  var url=url.split("\n");
		
  if (closeother == true)
groupOpen.closeotherandopen(url,delay);
	else 
	groupOpen.openurls(url,delay);
	 break;  //case0 结束
	 
	  case 1:
	    var newtab = prefs.getCharPref("browser.newtab.url");
	      gBrowser.selectedTab = gBrowser.addTab(newtab);
		      gBrowser.removeAllTabsBut(gBrowser.selectedTab);
		    break; //case 1 jieshu
	  case 2:
	//右键打开配置窗口，open setting xul
	    window.openDialog('chrome://groupopen/content/options.xul',"Multi tab", 'chrome,centerscreen,dependent');
	    break;
	} //switch 结束
	}
};

window.addEventListener('load',groupOpen.onload,false)