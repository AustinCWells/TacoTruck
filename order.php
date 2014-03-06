<!DOCTYPE html>
<!-- The inspiration for this assignment comes from here: http://www.realviewdigital.com/wp-content/uploads/2013/11/newspaper_desktop_by_tatenokai-d39w05t.jpg-->
<html>
<head>
    <meta charset="utf-8">
    <meta content="" name="description">
    <meta content="width=device-width, initial-scale=1" name="viewport">

    <title>Place Your Order</title>
    <link href="css/main.css" rel="stylesheet">
    <link href="css/order.css" rel="stylesheet">
    <link href="css/nav.css" rel="stylesheet">
</head>

<body>
<?php include "components/nav.html"; ?>
<?php include "components/modals.html"; ?> 

<span class="currentPage" id="orderPage"></span>

<div id="tacoCreate" class="section"><form id="tacoForm"><section class="collumn">
	Quantity:<select name="Quantity">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
	</select><br>
	<h2>Tortilla</h2>
	<div id="tortillaList">
	</div>
	<h2>Filling</h2>
	<div id="fillingList">
	</div>
</section>
<section class="collumn">
	<h2>Rice</h2>
	<div id="riceList">
		<input id="NoRice" type="radio" name="rice" value="No Rice" checked data-price="0.00"><label for="NoRice"> No Rice</label><br>
	</div>
	<h2>Beans</h2>
	<div id="beansList">
		<input id="NoBeans" type="radio" name="beans" value="No Beans" checked data-price="0.00"><label for="NoBeans"> No Beans</label><br>
	</div>
</section>
<section class="collumn">
	<h2>Sauces</h2>
	<div id="saucesList">
		<input id="NoSauce" type="radio" name="sauces" value="No Sauce" checked data-price="0.00"><label for="NoSauce"> No Sauce</label><br>
	</div>
	<h2>Vegetables</h2>
	<div id="vegetablesList">
	</div>
</section>
<section class="collumn">
	<h2>Cheese</h2>
	<div id="cheeseList">
		<input id="NoCheese" type="radio" name="cheese" value="No Cheese" checked data-price="0.00"><label for="NoCheese"> No Cheese</label><br>
	</div>
	<h2>Extras</h2>
	<div id="extrasList">
	</div>
	<input type="button" id="clearButton" value="Clear Order">
	<input type="submit" id="tacoSubmit" value="Add to Sack">
</section>
</form>
</div>

<div id="orderView" class="section"><h2>Taco Sack</h2>
	<section id="tacoSack"></section>
<form id="sackForm">
	<div>Total: $<span id="totalSpan"></span></div>
	<input type="button" id="sackSubmit" class="pay" value="Checkout">
</form>
</div>	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script> 
    <script src="js/order.js"></script>
    <script language="javascript"  type="text/javascript" src="js/modal.js"> </script> 
  	<script language="javascript" type="text/javascript" src="js/formSubmit.js"> </script> 
</body>
</html>