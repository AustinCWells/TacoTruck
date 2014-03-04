$(document).ready(function(){
	$(document).on("submit","form", function( event ){
		
		var password = document.getElementById("loginPassword");
		var loginName = document.getElementById("loginName");

		$.ajax({
			type: 'POST',
			url: 'someURL',
			data: $(this).serialize(),
			error: function( ){

				alert("LIFE FAILED");
			}
		});
		event.preventDefault(); 
		document.getElementsByClassName('loginModal').className = "modal";
		document.getElementsByClassName("overlay").className = ""; 
	});


	}
)