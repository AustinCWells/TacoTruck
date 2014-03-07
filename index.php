<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script language="javascript" type="text/javascript" src="js/index.js"> </script> 
	<script src="js/jquery.cookie.js"></script>
	<script language="javascript"  type="text/javascript" src="js/modal.js"> </script>  
	<script language="javascript"  type="text/javascript" src="js/nav.js"> </script> 
	<script language="javascript"  type="text/javascript" src="js/formSubmit.js"> </script> 
	<link href="http://fonts.googleapis.com/css?family=Raleway:400,300,700" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic" rel="stylesheet" type="text/css">	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/index.css" type="text/css">
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
					<p>We are bringing Taco Food Trucks into the new age of online ordering.  Where you can custom your taco orders from the convenance of the web.  Just pick out a taco truck near you.  Click order and customize as many tacos you want and then all to your taco sack. And just hit checkout and pay. Easy as 1, 2, 3 and you will have your tacos waiting for you at the truck you selected. </p>
				</div>
			</div>

			<div id = "createAnAccount" class="grid-third invert">
				<img class="icon" src="img/gear.png">
				<h2>Create An Account</h2>
				<div class = "subContent">
					<div> We save you last order for ease of repurchasing </div>
					<div> No need to re-enter credit card info each</div>
				</ul>
				</div>
			</div>

			<div id="sackInfo" class="grid-third invert">
				<img class="icon"src="img/sack.png">
				<h2>Taco Sack</h2>
				<div class = "subContent">
					<!-- <img src="img/taco_sack.png" id = "tacoSack"> -->
					<p>Your cart or as we call it you Taco Sack.  As you add tacos to your order they will appear in your sack.  Ready for you to checkout when you are ready.</p>
				</div>
			</div>

		
			<div class="grid-full white">
				<article id = "tacoMenu">
					<div>
						<h2>Taco Options</h2>
					</div>
				</article>
			</div>

		</div>




		<div class = "end"></div>



</body>
</html>