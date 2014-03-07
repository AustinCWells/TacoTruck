$(document).ready(function(){

	$.cookie.json = true;

	$.getJSON("json/taco_truck_menu.json", function(menu) {

		$.cookie("menu", menu);
		var menu = menu.menu;
		var keys = Object.keys(menu);
		console.log(keys);

		for(var key in menu){

			if(key === "sauces"){

				$("#tacoMenu").append("<section id = \"" + key +"\"><table><tr><th>Heat Rating</th></tr></table></section>");

			}

			else if(key === "vegetables"){

				$("#tacoMenu").append("<section id = \"" + key +"\"><table></table></section>");

			}

			else{

				$("#tacoMenu").append("<section id = \"" + key +"\"><table><tr><th>Price</th></tr></table></section>");
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
					$("#" + keys[i] + " tbody").append("<tr><td>"+ info[j].name + "</td><td>"+ info[j].heatRating + "</td></tr>");
				else if(keys[i] === "vegetables")
					$("#" + keys[i] + " tbody").append("<tr><td>"+ info[j].name + "</td></tr>");
				else
					$("#" + keys[i] + " tbody").append("<tr><td>"+ info[j].name + "</td><td>$"+ info[j].price.toFixed(2) + "</td></tr>");

			}

		}
			
		$("#beans").after($("#extras"));
		//$(".right").after("<br>");
		console.log($("#tacoMenu section").addClass("left"));
		//$("#tacoMenu").children("section:nth-child(odd)").addClass("right");
		$("#extras").after("<div class = 'end'></div>");
		//$("#tacoMenu").children("section:nth-child(odd)").addClass("right");
		//console
		
    	
	});
	
});
