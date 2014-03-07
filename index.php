<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script language="javascript" type="text/javascript" src="js/index.js"> </script> 
	<script src="js/jquery.cookie.js"></script>
	<script language="javascript"  type="text/javascript" src="js/modal.js"> </script>  
	<script language="javascript"  type="text/javascript" src="js/nav.js"> </script> 
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/index.css" type="text/css">
	<link href="css/nav.css" rel="stylesheet">

</head>
<body>
	<?php include "components/nav.html"; ?>
	<?php include "components/modals.html"; ?> 
	<span class="currentPage" id="indexPage"></span>

	<div class="section">

		<article id = "tacoMenu">
			<div>
				<h2>Taco Options</h2>
			</div>
		</article>

		<article id = "info">

			<section id = "aboutUs">
				<h2>About Us</h2>
				<div class = "subContent">
					<p>We are bringing tacos into the digital age with the introduction of online taco ordering. Custom order your favorite tacos from school, the office, or your favorite recliner with only a few clicks.</p>
					<p>Choose a tortilla and build your tacos with a wide variety of fillings, rice, beans, cheese, and more! Once you have added all your tacos to the Taco Sack, select one of our five truck locations and we'll have your sack ready for you. </p>
				</div>
			</section>

			<section id = "createAnAccount">
				<h2>Create An Account</h2>
				<div class = "subContent">
				<ul><b>Why use our site?</b>
					<li>Convenient, easy to use ordering</li>
					<li>We'll remember your credit card info, so you can checkout with just one click</li>
				</ul>
			</section>

			<section id = "sackInfo">
					<h2>Taco Sack</h2>
					<div class = "subContent">
						<img src="img/taco_sack.png" id = "tacoSack">
						<p>Your cart or as we call it you Taco Sack.  As you add tacos to your order they will appear in your sack.  Ready for you to checkout when you are ready.</p>
					</div>
			</section>

		</article>


		<div class = "end"></div>

	</div>

</body>
</html>