<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script>
	<script language="javascript" type="text/javascript" src="js/index.js"> </script> 
	<script language="javascript"  type="text/javascript" src="js/modal.js"> </script>  
	<script language="javascript"  type="text/javascript" src="js/nav.js"> </script> 
	<script language="javascript"  type="text/javascript" src="js/formSubmit.js"> </script> 
	<link href="http://fonts.googleapis.com/css?family=Raleway:400,300,700" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic" rel="stylesheet" type="text/css">	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link href="css/nav.css" rel="stylesheet">

</head>
<body>
	 <?php include "components/nav.html"; ?> 
	<?php include "components/modals.html"; ?> 
	<span class="currentPage" id="indexPage"></span>
	<img  id="headerImage" src="img/background.jpg">
	<img id="tacoTruck" src="img/taco_truck_logo.png" alt="Taco Truck">



	

		<div class="grid charcoal">

			<div class="grid-full white">
				<h1 class="spotlightText"> WE MAKE AWESOME TACOS </h1>
			</div>


			<div id = "aboutUs" class="grid-third invert">
				<img class="icon" src="img/us.png">
				<h2>About Us</h2>
				<div class = "subContent">
					<p>Welcome to the new age of taco food trucks! On this site, you can create custom taco orders from the convenience of your own computer.  Just pick out a taco truck near you, click order, and customize as many tacos you want. All these orders get added to your trusty taco sack so all you need to do is just hit checkout and pay. It's as simple as that! So go on and order, your tacos will be waiting for you. </p>
				</div>
			</div>

			<div id = "createAnAccount" class="grid-third invert">
				<img class="icon" src="img/gear.png">
				<h2>Create An Account</h2>
				<div class = "subContent">
					<div> We save your last order for ease of repurchasing </div>
					<div> No need to re-enter credit card info each time you order from us!</div>
				</ul>
				</div>
			</div>

			<div id="sackInfo" class="grid-third invert">
				<img class="icon"src="img/sack.png">
				<h2>Taco Sack</h2>
				<div class = "subContent">
					<!-- <img src="img/taco_sack.png" id = "tacoSack"> -->
					<p>Your cart, or as we call it your Taco Sack, is your best friend!  As you add tacos to your order they will appear in your sack; ready for you to checkout when your ready to chow down on some of our quality tacos.</p>
				</div>
			</div>

		
			<div class="grid-full white">

				<article id = "tacoMenu">

					<div>
						<h2>Taco Options</h2>
					</div>

					<div class = "left">
					</div>

					<div class = "right">
					</div>

				</article>

			</div>

		</div>




		<div class = "end"></div>



</body>
</html>