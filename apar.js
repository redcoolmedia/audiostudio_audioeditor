(function(){
  var apps_urls = {
    creapp: "https://www.redcoolmedia.net/appdirect/preaudistudio.php",
    files: "https://www.redcoolmedia.net/appdirect/filemanager.html",
    usersettings: "https://www.redcoolmedia.net/appdirect/redcoolchangeuser.html",
  };

 
  for (var link_id in apps_urls){
        var url = apps_urls[link_id];
        document.getElementById(link_id).firstElementChild.href = url;
  }
  
  aaa = encodeURIComponent("https://www.redcoolmedia.net/appdirect/filemanager.html");
  document.getElementById("usersettings").firstElementChild.href = "https://www.redcoolmedia.net/appdirect/redcoolchangeuser.html?ira=" + aaa;
  
  document.getElementById('situation').innerText = `Using AudioStudio audio editor`;

  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
  
  document.querySelector(`#files .label`).innerText = "File Manager";
  document.querySelector(`#usersettings .label`).innerText = "Set userid";
})();
