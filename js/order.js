window.addEventListener('load', function(event) {

$.cookie.json = true;

var list = $.cookie("location");
console.log(list);

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
		'" data-price="' + filling[i].price.toFixed(2) + '"><label for="' + filling[i].name + '">' + ' ' + filling[i].name + ' $' + filling[i].price.toFixed(2) + '</label><br>';
		$("#fillingList").append(html);


	}
    for(var i=0;i<tortilla.length;i++) {
    	//console.log(tortilla[i]);
		var html = 
		'<input id="' + tortilla[i].name + '" type="radio" name="tortilla" value="' + tortilla[i].name +
		'" data-price="' + tortilla[i].price.toFixed(2) + '"><label for="' + tortilla[i].name + '">' + ' ' + tortilla[i].name + ' $' + tortilla[i].price.toFixed(2) + '</label><br>';
		$("#tortillaList").append(html);
	}

    for(var i=0;i<rice.length;i++) {
    	//console.log(rice[i]);
		var html = 
		'<input id="' + rice[i].name + '" type="radio" name="rice" value="' + rice[i].name +
		'" data-price="' + rice[i].price.toFixed(2) + '"><label for="' + rice[i].name + '">' + ' ' + rice[i].name + ' $' + rice[i].price.toFixed(2) + '</label><br>';
		$("#riceList").append(html);
	}

    for(var i=0;i<beans.length;i++) {
    	//console.log(beans[i]);
		var html = 
		'<input id="' + beans[i].name + '" type="radio" name="beans" value="' + beans[i].name +
		'" data-price="' + beans[i].price.toFixed(2) + '"><label for="' + beans[i].name + '">' + ' ' + beans[i].name + ' $' + beans[i].price.toFixed(2) + '</label><br>';
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
		'<input id="' + vegetables[i].name + '" type="checkbox" name="vegetables" value="' + vegetables[i].name +
		'"><label for="' + vegetables[i].name + '">' + ' ' + vegetables[i].name + '</label><br>';
		$("#vegetablesList").append(html);
	}

    for(var i=0;i<extras.length;i++) {
    	//console.log(extras[i]);
		var html = 
		'<input id="' + extras[i].name + '" type="checkbox" name="extras" value="' + extras[i].name +
		'" data-price="' + extras[i].price.toFixed(2) + '"><label for="' + extras[i].name + '">' + ' ' + extras[i].name + ' $' + extras[i].price.toFixed(2) + '</label><br>';
		$("#extrasList").append(html);
	}

    for(var i=0;i<cheese.length;i++) {
    	//console.log(cheese[i]);
		var html = 
		'<input id="' + cheese[i].name + '" type="radio" name="cheese" value="' + cheese[i].name +
		'" data-price="' + cheese[i].price.toFixed(2) + '"><label for="' + cheese[i].name + '">' + ' ' + cheese[i].name + ' $' + cheese[i].price.toFixed(2) + '</label><br>';
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

var tacoNumber = 1;
var orderTotal = 0;
$("#totalSpan").text('' + orderTotal.toFixed(2));

document.getElementById("tacoForm").onsubmit = (function formSubmit(e) {
e.preventDefault();

//var price = $('input[name="filling"]:checked').price();


/*
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
$("#taco").append($('input[name="vegetables"]:checked').val());//needs to increment over all possible checked vegetables
$("#taco").append($('<br>'));
$("#taco").append($('input[name="extras"]:checked').val());//needs to increment over all possible checked extras
$("#taco").append($('<br>'));
$("#taco").append($('input[name="cheese"]:checked').val());
$("#taco").append($('<br>'));
*/
var tacoTotal = parseFloat($('input[name="filling"]:checked').data('price'),10) +
	parseFloat($('input[name="tortilla"]:checked').data('price'),10) +
	parseFloat($('input[name="rice"]:checked').data('price'),10) +
	parseFloat($('input[name="beans"]:checked').data('price'),10) +
	parseFloat($('input[name="cheese"]:checked').data('price'),10) +
	parseFloat($('input[name="extras"]:checked').data('price'),10);//needs to increment over all possible checked extras

tacoTotal = tacoTotal * parseInt($('select[name="Quantity"]').val());

$("#tacoSack").append('<table class="taco" id="taco' + tacoNumber + '"><tr><td>Taco #' + tacoNumber + '</td><td class="right">Quantity: ' + $('select[name="Quantity"]').val() + '</tr><tr><td>' + $('input[name="filling"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="filling"]:checked').data('price') + '</td></tr><tr><td>' + $('input[name="tortilla"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="tortilla"]:checked').data('price') + '</td></tr><tr><td>' + $('input[name="rice"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="rice"]:checked').data('price') + '</td></tr><tr><td>' + $('input[name="beans"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="beans"]:checked').data('price') + '</td></tr><tr><td>' + $('input[name="sauces"]:checked').val() + '</td><td class="right">$0.00</td></tr><tr><td>' + $('input[name="vegetables"]:checked').val() + '</td><td class="right">$0.00</td></tr><tr><td>' + $('input[name="cheese"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="cheese"]:checked').data('price') + '</td></tr><tr><td>' + $('input[name="extras"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="extras"]:checked').data('price') + '</td></tr><tr><td>Total:</td><td class="right">$' + parseFloat(tacoTotal).toFixed(2) + '</td></tr></table>');


orderTotal = orderTotal + tacoTotal;
$("#totalSpan").text('' + orderTotal.toFixed(2));


document.getElementById("tacoForm").reset();
tacoNumber++;
});


}, false);

