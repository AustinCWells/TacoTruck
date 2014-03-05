$(document).ready(function(){

	$.cookie.json = true;

	$.getJSON("json/taco_truck_menu.json", function(menu) {

		$.cookie("menu", menu);
		var menu = menu.menu;
		var keys = Object.keys(menu);
		console.log(keys);

		for(var key in menu){

			if(key === "sauces"){

				$("#tacoMenu").append("<section id = \"" + key +"\"><ul class = \"left\"></ul><ul class = \"right end\"><h4>Heat Rating</h4></ul></section>");

			}

			else if(key === "vegetables"){

				$("#tacoMenu").append("<section id = \"" + key +"\"><ul class = \"left\"></ul></section>");

			}

			else{

				$("#tacoMenu").append("<section id = \"" + key +"\"><ul class = \"left\"></ul><ul class = \"right end\"><h4>Price</h4></ul></section>");

			}

			if(key === "type")
				$("#type ul.left").append("<h3>Fillings</h3>");
			else
				$("#" + key + " ul.left").append("<h3>" + key[0].toUpperCase() + key.substring(1) + "</h3>");

		};

		for(var i = 0; i < keys.length; i++){

			var info = menu[keys[i]];

			for(var j = 0; j < info.length; j++){
				//console.log(info[i]);

				$("#" + keys[i] + " ul.left").append("<li>"+ info[j].name + "</li>");

				if(keys[i] === "sauces")
					$("#" + keys[i] + " ul.right").append("<li>"+ info[j].heatRating + "</li>");
				else
					$("#" + keys[i] + " ul.right").append("<li>"+ info[j].price + "</li>");

			}

		}
			


		//$("#" + key + " ul.left").append("<li>"+ menu[key].name + "</li>");
			//$("#" + key + " ul.right").append("<li>"+ menu[key].price + "</li>");



		
    	
	});
	
});
