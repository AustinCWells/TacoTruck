<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
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
				<p></p>
			</section>

			<section id = "createAnAccount">
				<h2>Create An Account</h2>
				<p></p>
			</section>

			<section id = "sackInfo">
					<h2>Taco Sack</h2>
					<div>
						<img src="img/taco_sack.png" style = "width = 5%">
						<p>Your Taco Sack is in essance your cart.  As you add tacos to your order they will appear in your sack.</p>
					</div>
			</section>

		</article>

		<article id = "tacoMenu">
		</article>

	</div>

</body>
</html>