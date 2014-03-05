<!DOCTYPE HTML>
<html>
<head>
	<title>Taco Truck | Maps</title>
	
	<script>
		$.cookie('myCookie','isYummy!'); 
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places" type = "text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script>  
	<script type="text/javascript" src = "js/map.js"></script>
	<script language="javascript"  type="text/javascript" src="js/modal.js"> </script> 
  	<script language="javascript" type="text/javascript" src="js/formSubmit.js"> </script> 
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link href="css/nav.css" rel="stylesheet">
	

	
</head>
<body>
	<? include "components/nav.html" ?>
	<? include "components/modals.html" ?> 
<div class="section">
	<div id = "mapMenu">

	</div>
	<div id="map"></div>
</div>
</body>
</html>