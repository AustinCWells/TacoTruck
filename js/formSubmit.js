$(document).ready(function(){
	$(document).on("submit","form.loginForm", function( event ){
		
		event.preventDefault(); 

		$.ajax({
			type: 'POST',
			url: 'http://localhost/tacotruck/php/accountLogin.php',
			data: $(this).serialize(),
			success: function(){
				alert("you totally got it!");
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
			url: 'http://localhost/tacotruck/php/accountCreation.php',
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