window.addEventListener('load', function(event) {

var page = document.getElementsByClassName("currentPage")[0].getAttribute("id");
if(page === "indexPage") {
	document.getElementById("indexHeader").style.borderBottom="solid 3px #E83535";
}
if(page === "orderPage") {
	document.getElementById("orderHeader").style.borderBottom="solid 3px #E83535";
}
if(page == "mapPage") {
	document.getElementById("mapHeader").style.borderBottom="solid 3px #E83535";
}

}, false);
