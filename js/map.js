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

		content = "<div><h3>" + addresses[i].name + "</h3><h4>" + addresses[i].address + "<br>" + 
		addresses[i].state + ", " + addresses[i].city + " " + addresses[i].zipcode + 
		"</h4></div>";

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
  google.maps.event.addListener(marker, 'mouseover', function() {
  	/*if(currentWindow === null){
  		infowindow.open(map, marker);
  		currentWindow = infowindow;
  	}
  	else{
  		currentWindow.close();
  		infowindow.open(map, marker);
  		currentWindow = infowindow;
  	}*/
  	infowindow.open(map, marker);
  });

  google.maps.event.addListener(marker, 'mouseout', function() {
  	infowindow.close();
  });

}

$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(initialize);
	}
);

var addAddressesToMenu = function(list){
	console.log(list);
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