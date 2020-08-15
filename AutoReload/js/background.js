var contextMenus = {};

contextMenus.createAutoReloader = chrome.contextMenus.create(
		{
			"title":"AutoReload",
			"contexts":["all"]
		},
		function(){
			if(chrome.runtime.lastError){
				console.error(chrome.runtime.lastError.message);
			}
		}
	);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab){
	if(info.menuItemId===contextMenus.createAutoReloader){
		chrome.tabs.executeScript({
			file:"js/reload.js"
		});
	}
}