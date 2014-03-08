$(document).ready(function(){
	$(document).on("submit","form.loginForm", function( event ){
	
		event.preventDefault(); 
		var user = new Object();
		user.email = $("#loginName").val()
		user.password = $("#loginPassword").val()
		$.ajax({
			type: 'POST',
			url: '/api/login',
			content: 'application/json',
			data: JSON.stringify(user),
			success: function(data){
				console.log(data);
				var obj = JSON.parse(data);
				if(obj.info == false) {
					$("#loginModal").css({"border":"2px solid red"});
					$(".errorMessage").text("silly, your login information is not correct");
				}
				else if(data.error != undefined) {
					console.log(data.error);
					alert("Errors occured during the request :(");
					$("#loginModal").css({"border":"2px dashed red"});
					$(".errorMessage").text("Woah, something went wrong");
				}
				else {
					console.log("loading cookie");
					//store user information in cookie 
					$.cookie.json = true;	
					$.cookie("user_id", obj.info.user_id);
					$.cookie("email", obj.info.email);
					$.cookie("given_name", obj.info.given_name);
					$.cookie("surname", obj.info.surname);

					document.getElementById('loginModal').className = "modal";
					document.getElementById("overlay").className = ""; 
					//show login in navbar and show success on attempted login
					$(".login").hide(); 
					console.log($.cookie("email"));
					$(".loginInformation").show();
					$(".logout").show();
					$(".logout").text("  Logout").css({"font-size":"20px"});
					$(".logout").click(function(){
						$.removeCookie('email');
						$(".login").show();
						$(".loginInformation").hide();
						$(".logout").text(" ");
						$("#loginModal").css({"border":"2px solid black"});
						$(".errorMessage").text("Welcome Back!").css({"color":"black"});
					});	
					$(".loginInformation").text($.cookie("email")).css({"font-size":"17px"});
					$("#loginModal").css({"border":"2px solid green"});
					$(".errorMessage").text("You're logged in!").css({"color":"green"});
				}
			},
			error: function( ){
				alert("WE'RE SORRY SOMETHING WENT WRONG")
			}
		});
		
		
	});

	$(document).on("submit", "form.accountForm", function(){
		event.preventDefault();
		var user = new Object();
		user.fname = $("#accountFName").val();
		user.lname= $("#accountLName").val();
		user.email = $("#accountEmail").val(); 
		user.phonenumber = $("#accountPhoneNumber").val();
		user.password = $("#accountPassword").val();
		user.ccnumber = $("#accountCreditCardNumber").val(); 
		user.creditcard = $("#accountCreditCard").val(); 
		$.ajax({
			type: 'POST',
			url: '/newaccount',
			data: JSON.stringify(user),
			success: function( data ){
			console.log(data);
				var obj = JSON.parse(data);
				if(obj.info == false) {
					alert("failed login"); 
				}
				else if(data.error != undefined) {
					alert("didn't connect"); 
				}
				else {
					document.getElementById('accountModal').className = "modal";
					document.getElementById("overlay").className = ""; 
					alert("success"); 
				}
			},
			error: function(){
				alert("OH NO! someone has gone and screwed up."); 
			}
		});

		 
		document.getElementById('accountModal').class = "modal"; 
		document.getElementById('overlay').className = ""; 

	});

	$(document).on("submit","form.paymentForm", function(){
		
		/* initiate and display maps option */
		var modalId = "mapModal"
		var modal = document.getElementById(modalId)
		var background = document.getElementById("overlay");
		background.className = "overlay"
		modal.className = "displayModal";
		var width = modal.clientWidth; 
		var height = modal.clientHeight; 
		var displacementX = '-'+ (width/2) + 'px';
		var displacementY = '-' + (height/2) + 'px';   
		modal.style.marginLeft = displacementX;
		modal.style.marginTop = displacementY; 
		var script = document.createElement("script");
	    script.type = "text/javascript";
	    script.src = "js/map.js"; 
	    document.getElementsByTagName("head")[0].appendChild(script);
	    return false;




	});

	function displayModal(modalId)
{
	var modal = document.getElementById(modalId)
	var background = document.getElementById("overlay");
	background.className = "overlay"
	modal.className = "displayModal";
	var width = modal.clientWidth; 
	var height = modal.clientHeight; 
	var displacementX = '-'+ (width/2) + 'px';
	var displacementY = '-' + (height/2) + 'px';   
	modal.style.marginLeft = displacementX;
	modal.style.marginTop = displacementY; 


}
})