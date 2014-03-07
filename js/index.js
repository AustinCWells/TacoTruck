$(document).ready(function(){

	$.cookie.json = true;
	


	$.getJSON(/*"json/taco_truck_menu.json"*/"/tacotruck/api/menu", function(menu) {
		console.log("he");
		$.cookie("menu", menu);
		var menu = menu.menu;
		var keys = Object.keys(menu);
		console.log(keys);

		for(var key in menu){

			if(key === "sauces"){

				$("#tacoMenu").children("div:nth-child(3)").append("<section id = \"" + key +"\"><table><tr><th>Heat Rating</th></tr></table></section>");

			}

			else if(key === "vegetables"){

				$("#tacoMenu").children("div:nth-child(3)").append("<section id = \"" + key +"\"><table></table></section>");

			}

			else{

				$("#tacoMenu").children("div:nth-child(2)").append("<section id = \"" + key +"\"><table><tr><th>Price</th></tr></table></section>");
			}

			if(key === "type")
				$("#type tbody:nth-child(1)").children().children().before("<th>Fillings</th>");

			else if(key === "vegetables")
				$("#vegetables table").append("<tr><th>Vegetables</th></tr>");

			else
				$("#" + key + " tbody:nth-child(1)").children().children().before("<th>" + key[0].toUpperCase() + key.substring(1) + "</th>");

		};

		for(var i = 0; i < keys.length; i++){

			var info = menu[keys[i]];

			for(var j = 0; j < info.length; j++){
				//console.log(info[i]);

				if(keys[i] === "sauces")
					$("#" + keys[i] + " tbody").append("<tr><td class = 'name'>"+ info[j].name + "</td><td>"+ info[j].heatRating + "</td></tr>");
				else if(keys[i] === "vegetables")
					$("#" + keys[i] + " tbody").append("<tr><td class = 'name'>"+ info[j].name + "</td></tr>");
				else
					$("#" + keys[i] + " tbody").append("<tr><td class = 'name'>"+ info[j].name + "</td><td>$"+ info[j].price.toFixed(2) + "</td></tr>");

			}

		}
			
		$("#tacoMenu section").addClass("left");
		
    	
	});
	
});
