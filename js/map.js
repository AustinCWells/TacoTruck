var map;
var geoAddresses = [];
var geocoder;
var addresses;
var currentWindow = null;


var codeAddress = function(addresses){

	var address;

	for(var i = 0; i < addresses.length; i++){

		address = addresses[i].address + ", " + addresses[i].city + ", " + addresses[i].state + " " + addresses[i].zipcode;
		name = addresses[i].name;

		//console.log(name);

		geocoder.geocode({'address': address}, function(results, status){

			if(status == google.maps.GeocoderStatus.OK){
	    		storeGeoLocations(results[0].geometry.location);
			}

			else
				alert('Geocode was not successful for the following reason: ' + status);

		});
		
	}

}

var storeGeoLocations = function(geoLocation){
	geoAddresses.push(geoLocation);

	if(geoAddresses.length === 5){
		addMarkers();
	}

}

var addMarkers = function(){

	var marker;
	var infoWindow;
	var content;

	for(var i = 0; i < geoAddresses.length; i++){

		content = "<div><h3>" + addresses[i].name + "</h3><span>" + addresses[i].address + "<br>" + 
		addresses[i].state + ", " + addresses[i].city + " " + addresses[i].zipcode + 
		"</span></div>";

		marker = new google.maps.Marker({
			position: geoAddresses[i],
			map: map,
			icon: "img/taco_map_icon.png"
		});



		infoWindow = new google.maps.InfoWindow({
			content: content
		});

		makeInfoWindowEvent(map, infoWindow, marker);

	}
}

var initialize = function(location){



	geocoder = new google.maps.Geocoder();

	var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

	var mapOptions = {
		center: currentLocation,
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var marker = new google.maps.Marker({
		position: currentLocation,
		map: map,
		title: 'Current Location'
	});


	//this ensures we wait until the map bounds are initialized before we perform the search
	google.maps.event.addListenerOnce(map, 'bounds_changed', getAddresses);


}


var makeInfoWindowEvent = function(map, infowindow, marker) {

	var name = infowindow.content.substring(9);
	name = name.substring(0, name.indexOf("<"));
	var index = findIndex(name) + 1;


	google.maps.event.addListener(marker, 'mouseover', function() {
  		infowindow.open(map, marker);
  		menuDisplay(index, true);
	});

	google.maps.event.addListener(marker, 'mouseout', function() {
  		infowindow.close();
  		menuDisplay(index, false);
 	});

}

$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(initialize);
	}
);

var addAddressesToMenu = function(list){

	var add = "<ul>Locations";


	for( var i = 0; i < list.length; i++){
		add += "<li><h4>" + list[i].name + "</h4><div class = \"hidden\"><span>"+ addresses[i].address + "<br>" + 
		addresses[i].state + ", " + addresses[i].city + " " + addresses[i].zipcode + 
		"</span><form action = \"#\"><input type = \"submit\" value = \"Select This Location\"></div></li>";
	}

	add += "</ul";

	$("#mapMenu").append(add);

	$("li").hover(
	        function() {
	        	
	          $(this).children(":nth-child(2)").removeClass('hidden');   
	        }, function() {
	          $(this).children(":nth-child(2)").addClass('hidden');  
	        }
	        
	    );
}

var findIndex = function(name){
	for(var i = 0; i < addresses.length; i++){
		if(addresses[i].name === name)
			return i;
	}
}


var menuDisplay = function(num, on){
	if(on)
		$("ul").children(":nth-child("+ num.toString() + ")").children(":nth-child(2)").removeClass('hidden');
	else
		$("ul").children(":nth-child("+ num.toString() + ")").children(":nth-child(2)").addClass('hidden');

}

var getAddresses = function(){

	var url = "json/taco_truck_locations.json";
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {

	    if (request.readyState === 4) {
	    	addresses = request.responseText;
	    	addresses = JSON.parse(addresses);
	    	codeAddress(addresses);
	    	addAddressesToMenu(addresses);
	    }
	}
	request.open('GET', url, true);
	request.send();
}

