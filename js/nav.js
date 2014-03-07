window.addEventListener('load', function(event) {
$.cookie.json = true;
console.log("the email is" + $.cookie("email")); 
if($.cookie("email")) {
	$(".login").hide(); 
	$(".createAccount").hide();
	$(".loginInformation").text("Logged In As: " + $.cookie("email")).css({"font-size":"24px"});
					
}

var page = document.getElementsByClassName("currentPage")[0].getAttribute("id");
if(page === "indexPage") {
	document.getElementById("indexHeader").style.borderBottom="solid 3px rgb(255, 235, 0)";
}
if(page === "orderPage") {
	document.getElementById("orderHeader").style.borderBottom="solid 3px rgb(255, 235, 0)";
}
if(page == "mapPage") {
	document.getElementById("mapHeader").style.borderBottom="solid 3px rgb(255, 235, 0)";
}

}, false);

