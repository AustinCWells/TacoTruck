var map;
var geoAddresses = [];
var geocoder;
var addresses;
var currentWindow = null;
var currentTab = null;


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

		content = "<div id = \"loc" + i.toString()+ "\"><h3>" + addresses[i].name + "</h3><span>" + addresses[i].address + "<br>" + 
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
	$("li[class*=loc]").click(function(){

		if(currentTab === null){
			$(this).children("div").removeClass("hidden");
			currentTab = $(this);
		}

		else{
			currentTab.children("div").addClass("hidden")
			$(this).children("div").removeClass("hidden");
			currentTab = $(this);
		}

	});

	$("li[class*=loc]").hover(
		function(){
			$(this).addClass("hover");
		},
		function(){
			$(this).removeClass("hover");
		});


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

	var name = infowindow.content.substring(11);
	name = name.substring(0, 4);
	var loc = document.getElementsByClassName(name);

	google.maps.event.addListener(marker, 'mouseover', function() {
  		infowindow.open(map, marker);
  		$("li[class*=loc]").children("div").addClass("hidden");
  		$(loc[0]).children(":nth-child(2)").removeClass("hidden");
	});

	google.maps.event.addListener(marker, 'mouseout', function() {
  		infowindow.close();
  		$(loc[0]).children(":nth-child(2)").addClass("hidden");
 	});

 	google.maps.event.addDomListener(loc[0], 'mouseover', function(){
 		infowindow.open(map, marker);
 	});

	google.maps.event.addDomListener(loc[0], 'mouseout', function(){
 		infowindow.close();
  		
 	});

}

$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(initialize);
	}

);

var addAddressesToMenu = function(list){

	var add = "<div class='boxOfPlaces'><h5>Choose a location for taco pickup </h5><ul>";


	for( var i = 0; i < list.length; i++){
		add += "<li class = \"loc" + i.toString() + "\"><h4>" + list[i].name + "</h4><div class = \"hidden\"><div><span>"+ addresses[i].address + "<br>" + 
		addresses[i].state + ", " + addresses[i].city + " " + addresses[i].zipcode + 
		"</span></div><form action = \"order.php\"><input type = \"submit\" value = \"Select This Location\"></form></div></li>";
	}

	add += "</ul></div>";
	

	$("#mapMenu").append(add);
	
		$.cookie.json = true;

	$('input[type="submit"').click(function(event){
		var index = $(this).parent().parent().parent().attr('class')[3];
		index = parseInt(index);
		$.cookie("location", addresses[index]);
	});

}

var getAddresses = function(){

	var url = "json/taco_truck_locations.json";
	var request = new XMLHttpRequest();

	$.getJSON(url, function(loc){
		addresses = loc;
		codeAddress(loc);
		addAddressesToMenu(loc);
	});

}

 $(document).ready(function(){
 	console.log($("li[class*=loc]"));
 });