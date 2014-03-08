window.addEventListener('load', function(event) {
$.cookie.json = true;
console.log("the email is" + $.cookie("email")); 
if($.cookie("email")) {
	$(".login").hide(); 
	$(".loginInformation").text($.cookie("email")).css({"font-size":"20px"});
	$(".logout").text("  Logout").css({"font-size":"20px"});
	$(".logout").click(function(){
		$.removeCookie('email');
		$(".login").show();
		$(".loginInformation").hide();
		$(".logout").text(" ");
		$("#loginModal").css({"border":"2px solid black"});
		$(".errorMessage").text("Welcome Back!").css({"color":"black"});

	});			
}

//Update Nav bar styling based on current page
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

