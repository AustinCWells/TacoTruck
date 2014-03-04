window.addEventListener('load', function(event) {

$.getJSON("json/taco_truck_menu.json", function(data) {
    console.log(data);
    var filling = data.menu.type;
    var tortilla = data.menu.tortillas;
    var rice = data.menu.rice;
    var beans = data.menu.beans;
    var sauces = data.menu.sauces;
    var vegetables = data.menu.vegetables;
    var extras = data.menu.extras;
        var cheese = data.menu.cheese;

    for(var i=0;i<filling.length;i++) {
    	//console.log(filling[i]);
		//$("#fillingList").append($('<input type="radio" name="filling"><<br>'));

		var html = 
		'<input id="' + filling[i].name + '" type="radio" name="filling" value="' + filling[i].name +
		'"><label for="' + filling[i].name + '">' + ' ' + filling[i].name + ' $' + filling[i].price.toFixed(2) + '</label><br>';
		$("#fillingList").append(html);
	}

    for(var i=0;i<tortilla.length;i++) {
    	//console.log(tortilla[i]);
		var html = 
		'<input id="' + tortilla[i].name + '" type="radio" name="tortilla" value="' + tortilla[i].name +
		'"><label for="' + tortilla[i].name + '">' + ' ' + tortilla[i].name + ' $' + tortilla[i].price + '</label><br>';
		$("#tortillaList").append(html);
	}

    for(var i=0;i<rice.length;i++) {
    	//console.log(rice[i]);
		var html = 
		'<input id="' + rice[i].name + '" type="radio" name="rice" value="' + rice[i].name +
		'"><label for="' + rice[i].name + '">' + ' ' + rice[i].name + ' $' + rice[i].price + '</label><br>';
		$("#riceList").append(html);
	}

    for(var i=0;i<beans.length;i++) {
    	//console.log(beans[i]);
		var html = 
		'<input id="' + beans[i].name + '" type="radio" name="beans" value="' + beans[i].name +
		'"><label for="' + beans[i].name + '">' + ' ' + beans[i].name + ' $' + beans[i].price + '</label><br>';
		$("#beansList").append(html);
	}

    for(var i=0;i<sauces.length;i++) {
    	//console.log(sauces[i]);
		var html = 
		'<input id="' + sauces[i].name + '" type="radio" name="sauces" value="' + sauces[i].name +
		'"><label for="' + sauces[i].name + '">' + ' ' + sauces[i].name + '</label><br>';
		$("#saucesList").append(html);
	}	


    for(var i=0;i<vegetables.length;i++) {
    	//console.log(vegetables[i]);
		var html = 
		'<input id="' + vegetables[i].name + '" type="radio" name="vegetables" value="' + vegetables[i].name +
		'"><label for="' + vegetables[i].name + '">' + ' ' + vegetables[i].name + '</label><br>';
		$("#vegetablesList").append(html);
	}

    for(var i=0;i<extras.length;i++) {
    	//console.log(extras[i]);
		var html = 
		'<input id="' + extras[i].name + '" type="radio" name="extras" value="' + extras[i].name +
		'"><label for="' + extras[i].name + '">' + ' ' + extras[i].name + ' $' + extras[i].price + '</label><br>';
		$("#extrasList").append(html);
	}

    for(var i=0;i<cheese.length;i++) {
    	//console.log(cheese[i]);
		var html = 
		'<input id="' + cheese[i].name + '" type="radio" name="cheese" value="' + cheese[i].name +
		'"><label for="' + cheese[i].name + '">' + ' ' + cheese[i].name + ' $' + cheese[i].price + '</label><br>';
		$("#cheeseList").append(html);
	}		
});

/*
document.getElementById("tacoSubmit").onclick = (function (e) {
	e.preventDefault();
});
*/
document.getElementById("clearButton").onclick = (function (e) {
document.getElementById("tacoForm").reset();

});

document.getElementById("tacoForm").onsubmit = (function formSubmit(e) {
e.preventDefault();

//var price = $('input[name="filling"]:checked').price();

$("#tacoSack").append('<div id="taco">I am a taco!:<p></div>');
//$("#taco").append(price);
$("#taco").append($('<br>'));
$("#taco").append($('input[name="filling"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="tortilla"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="rice"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="beans"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="sauces"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="vegetables"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="extras"]:checked').val());
$("#taco").append($('<br>'));
$("#taco").append($('input[name="cheese"]:checked').val());
$("#taco").append($('<p>'));



document.getElementById("tacoForm").reset();
});


}, false);

