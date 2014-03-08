<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck | Maps</title>
	

	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places" type = "text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script>  
	<script type="text/javascript" src = "js/map.js"></script>
	<script language="javascript"  type="text/javascript" src="js/modal.js"> </script> 
  	<script language="javascript" type="text/javascript" src="js/formSubmit.js"> </script> 
  	<script language="javascript"  type="text/javascript" src="js/nav.js"> </script> 
  		<link href="http://fonts.googleapis.com/css?family=Raleway:400,300,700" rel="stylesheet" type="text/css">
	<link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/map.css" type="text/css">
	<link href="css/index.css" rel="stylesheet">
	<link href="css/nav.css" rel="stylesheet">
	

	
</head>
<body>
	<?php include "components/nav.html"; ?>
	<?php include "components/modals.html"; ?>
	<!-- LOADER MODELED AFTER NEW RELIC TUTORIAL --> 
	<div id="maploader"> </div>

	<span class="currentPage" id="mapPage"></span>

	<div id = "mapMenu">

	</div>
	<div id="map"></div>

</body>
</html>