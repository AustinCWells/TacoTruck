window.addEventListener('load', function(event) {

var page = document.getElementsByClassName("currentPage")[0].getAttribute("id");
if(page === "index") {
	document.getElementById("indexHeader").style.borderBottom="solid 3px #E83535";
}
if(page === "order") {
	document.getElementById("orderHeader").style.borderBottom="solid 3px #E83535";
}
if(page == "map") {
	document.getElementById("mapHeader").style.borderBottom="solid 3px #E83535";
}

}, false);

