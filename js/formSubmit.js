$(document).ready(function(){
	$(document).on("submit","form.loginForm", function( event ){
		
		event.preventDefault(); 
		var user = new Object();
		user.email = $("#loginName").val()
		user.password = $("#loginPassword").val()
		$.ajax({
			type: 'POST',
			url: '/TacoTruck/api/login',
			content: 'application/json',
			data: JSON.stringify(user),
			success: function(data){
				console.log(data);
				var obj = JSON.parse(data);
				if(obj.info == false) {
					alert("You're email isn't registered with us! try 'Create Account'");
				}
				else if(data.error != undefined) {
					console.log(data.error);
					alert("Errors occured during the request :(");
				}
				else {
					alert("you totally got it!");
				}
			},
			error: function( ){
				alert("OH NO! Something went wrong. :(")
			}
		});
		
		document.getElementById('loginModal').className = "modal";
		document.getElementById("overlay").className = ""; 
	});

	$(document).on("submit", "form.accountForm", function(){
		$.ajax({
			type: 'POST',
			url: '/php/accountCreation.php',
			data: $(this).serialize(),
			success: function(){
				alert("you totally got it!");
			},
			error: function(){
				alert("OH NO! someone has gone and screwed up."); 
			}
		});

		event.preventDefault(); 
		document.getElementById('accountModal').class = "modal"; 
		document.getElementById('overlay').className = ""; 

	});

	$(document).on("submit","form.paymentForm", function(){
		console.log($(this).serialize());
		$.ajax({
			type: 'POST',
			url: 'http://localhost/tacotruck/php/submitPayment.php',
			data: $(this).serialize(),
			success: function()
			{
				alert("you totally got it!");
			},
			error: function()
			{
				alert("OH NO! someone has gone and screwed up."); 
			}
		});

		event.preventDefault(); 
		document.getElementById('paymentModal').className = "modal"; 
		document.getElementById('overlay').className = ""; 





	});
})