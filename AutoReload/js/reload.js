var x = prompt("Enter the AutoReload time in seconds:", "60");
if(x!=null){
	var y = parseInt(x);
	y = y*1000;
	javascript:document.getElementsByTagName("body")[0].innerHTML = "<iframe id=\"testFrame\" src=\""+window.location.toString()+"\" style=\"position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;\"><\/iframe>";
	reloadTimer = setInterval(
					function(){ 
						document.getElementById("testFrame").src=document.getElementById("testFrame").src 
					},
					y);
}