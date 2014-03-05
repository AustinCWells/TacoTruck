<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script language="javascript" type="text/javascript" src="js/index.js"> </script> 
	<script src="js/jquery.cookie.js"></script> 
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/index.css" type="text/css">
	<link href="css/nav.css" rel="stylesheet">

</head>
<body>
	<?php include "components/nav.html"; ?>
	<?php include "components/modals.html"; ?> 
	<span class="currentPage" id="indexPage"></span>

	<div class="section">

		<article id = "info">

			<section id = "aboutUs">
				<h2>About Us</h2>
				<p>We're being Taco Food Trucks into the new age of online ordering.  Where you can custem order your taco from the convenance of the web.  Just pick out a taco truck near you.  Click order and customize as many tacos you want and then all to your taco sack. And just hit checkout and pay. Easy as 1, 2, 3 and you will have your tacos waiting for you at the truck you selected. </p>
			</section>

			<section id = "createAnAccount">
				<h2>Create An Account</h2>
				<ul>Benifits
					<li>We save you last order for ease of repurchasing</li>
					<li>No need to re-enter credit card info each</li>
				</ul>
			</section>

			<section id = "sackInfo">
					<h2>Taco Sack</h2>
					<div>
						<img src="img/taco_sack.png" id = "tacoSack">
						<p>Your cart or as we call it you Taco Sack.  As you add tacos to your order they will appear in your sack.  Ready for you to checkout when you are ready.</p>
					</div>
			</section>

		</article>

		<article id = "tacoMenu">
			<h2>Customizes Options</h2>
		</article>

		<div class = "end"></div>

	</div>

</body>
</html>