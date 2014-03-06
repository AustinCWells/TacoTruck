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
	<!--
	<input type="radio" id="Crunchy" name="tortilla" value="Crunchy"><label for="Crunchy">Crunchy</label><br>
	<input type="radio" id="SoftCorn" name="tortilla" value="SoftCorn"><label for="SoftCorn">Soft Corn</label><br>
	<input type="radio" id="SoftFlour" name="tortilla" value="SoftFlour"><label for="SoftFlour">Soft Flour</label><br>
	-->
	</div>
	<h2>Filling</h2>
	<div id="fillingList">
	<!--
	<input type="radio" id="Chicken" name="filling" value="Chicken"><label for="Chicken">Chicken</label><br>
	<input type="radio" id="Steak" name="filling" value="Steak"><label for="Steak">Steak</label><br>
	<input type="radio" id="Carnitas" name="filling" value="Carnitas"><label for="Carnitas">Carnitas</label><br>
	-->
	</div>
</section>
<section class="collumn">
	<h2>Rice</h2>
	<div id="riceList">
	<!--
	<input type="radio" id="NoRice" name="rice" value="NoRice" checked><label for="NoRice">No Rice</label><br>
	<input type="radio" id="Wheat" name="rice" value="Wheat"><label for="Wheat">Wheat</label><br>
	<input type="radio" id="White" name="rice" value="White"><label for="White">White</label><br>
	<h2>Beans</h2>
	-->
	</div>
	<h2>Beans</h2>
	<div id="beansList">
	<!--
	<input type="radio" id="NoBeans" name="beans" value="NoBeans" checked><label for="NoBeans">No Beans</label><br>
	<input type="radio" id="PintoBeans" name="beans" value="PintoBeans"><label for="PintoBeans">Pinto Beans</label><br>
	<input type="radio" id="BlackBeans" name="beans" value="BlackBeans"><label for="BlackBeans">Black Beans</label><br>
	-->
	</div>
</section>
<section class="collumn">
	<h2>Sauces</h2>
	<div id="saucesList">
	<!--
	<input type="radio" id="NoSauce" name="sauce" value="NoSauce" checked><label for="NoSauce">No Sauce</label><br>
	<input type="radio" id="CornSalsa" name="sauce" value="CornSalsa"><label for="CornSalsa">Corn Salsa</label><br>
	<input type="radio" id="SalsaVerde" name="sauce" value="SalsaVerde"><label for="SalsaVerde">Salsa Verde</label><br>
	<input type="radio" id="MildSalsa" name="sauce" value="MildSalsa"><label for="MildSalsa">Mild Salsa</label><br>
	<input type="radio" id="HotSalsa" name="sauce" value="HotSalsa"><label for="HotSalsa">Hot Salsa</label><br>
	-->
	</div>
	<h2>Vegetables</h2>
	<div id="vegetablesList">
	<!--
	<input type="radio" id="NoVegitables" name="vegetables" value="NoVegetables" checked><label for="NoVegitables">No Vegetables</label><br>
	<input type="radio" id="FajitaVeggies" name="vegetables" value="FajitaVeggies"><label for="FajitaVeggies">Fajita Veggies</label><br>
	<input type="radio" id="Lettuce" name="vegetables" value="Lettuce"><label for="Lettuce">Lettuce</label><br>
	-->
	</div>
</section>
<section class="collumn">
	<h2>Cheese</h2>
	<div id="cheeseList">
	</div>
	<h2>Extras</h2>
	<div id="extrasList">
	<!--	
	<input type="checkbox" id="SourCream" name="Extras" value="SourCream"><label for="SourCream">Sour Cream</label><br>
	<input type="checkbox" id="Cheese" name="Extras" value="Cheese"><label for="Cheese">Cheese</label><br>
	<input type="checkbox" id="Guacamole" name="Extras" value="Guacamole"><label for="Guacamole">Guacamole</label><br>
	-->
	</div>
	<input type="button" id="clearButton" value="Clear Order">
	<input type="submit" id="tacoSubmit" value="Add Taco to Sack">
</section>
</form>
</div>

<div id="orderView" class="section"><h2>Taco Sack</h2>
	<section id="tacoSack"></section>
<form id="sackForm">
	<div>Total: - -</div>
	<input type="submit" id="sackSubmit" class="pay" value="Checkout">
</form>
</div>	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script> 
    <script src="js/order.js"></script>
    <script language="javascript"  type="text/javascript" src="js/modal.js"> </script> 
  	<script language="javascript" type="text/javascript" src="js/formSubmit.js"> </script> 
</body>
</html>