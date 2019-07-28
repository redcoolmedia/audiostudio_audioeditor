chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Edit with AudioStudio audio editor",
        id: "AudioStudio",
        contexts: ["link"]
    });
});



chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "AudioStudio") {
        var var1 = info.selectionText;
        var AudioUrl = info.linkUrl;
        AudioStudioEdit(AudioUrl);
    }
});


function AudioStudioEdit(audiourl) {         
  	  	
  	if (
      ( audiourl.indexOf("docs.google.com") == -1 )
          && (audiourl.indexOf("redcoolmedia.net") == -1)
    ) 
    {
  		ira = encodeURIComponent("https://www.redcoolmedia.net/build/audiostudio.html?audiourl="+ audiourl);
  		gourl =  "https://www.redcoolmedia.net/appdirect/user.php?ira=" + ira;
    	window.open(gourl,'_blank');
    }
	
}

