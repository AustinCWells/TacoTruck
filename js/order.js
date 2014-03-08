$(document).ready(function(){


$.cookie.json = true;

var data = $.cookie("menu");
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
		'" data-price="' + filling[i].price.toFixed(2) + '" data-id="' + filling[i].tacoFixinId  + '"><label for="' + filling[i].name + '">' + ' ' + filling[i].name + ' $' + filling[i].price.toFixed(2) + '</label><br>';
		$("#fillingList").append(html);
		if(i===0) { var firstFilling = filling[i].name;}


	}
    for(var i=0;i<tortilla.length;i++) {
    	//console.log(tortilla[i]);
		var html = 
		'<input id="' + tortilla[i].name + '" type="radio" name="tortilla" value="' + tortilla[i].name +
		'" data-price="' + tortilla[i].price.toFixed(2) + '" data-id="' + tortilla[i].tacoFixinId  + '"><label for="' + tortilla[i].name + '">' + ' ' + tortilla[i].name + ' $' + tortilla[i].price.toFixed(2) + '</label><br>';
		$("#tortillaList").append(html);
		if(i===0) {var firstTortilla = tortilla[i].name;}
	}

    for(var i=0;i<rice.length;i++) {
    	//console.log(rice[i]);
		var html = 
		'<input id="' + rice[i].name + '" type="radio" name="rice" value="' + rice[i].name +
		'" data-price="' + rice[i].price.toFixed(2) + '" data-id="' + rice[i].tacoFixinId  + '"><label for="' + rice[i].name + '">' + ' ' + rice[i].name + ' $' + rice[i].price.toFixed(2) + '</label><br>';
		$("#riceList").append(html);
	}

    for(var i=0;i<beans.length;i++) {
    	//console.log(beans[i]);
		var html = 
		'<input id="' + beans[i].name + '" type="radio" name="beans" value="' + beans[i].name +
		'" data-price="' + beans[i].price.toFixed(2) + '" data-id="' + beans[i].tacoFixinId  + '"><label for="' + beans[i].name + '">' + ' ' + beans[i].name + ' $' + beans[i].price.toFixed(2) + '</label><br>';
		$("#beansList").append(html);
	}

    for(var i=0;i<sauces.length;i++) {
    	//console.log(sauces[i]);
		var html = 
		'<input id="' + sauces[i].name + '" type="radio" name="sauces" value="' + sauces[i].name + '" data-id="' + sauces[i].tacoFixinId  +
		'"><label for="' + sauces[i].name + '">' + ' ' + sauces[i].name + '</label><br>';
		$("#saucesList").append(html);
	}	


    for(var i=0;i<vegetables.length;i++) {
    	//console.log(vegetables[i]);
		var html = 
		'<input id="' + vegetables[i].name + '" type="checkbox" name="vegetables" value="' + vegetables[i].name + '" data-id="' + vegetables[i].tacoFixinId  +
		'"><label for="' + vegetables[i].name + '">' + ' ' + vegetables[i].name + '</label><br>';
		$("#vegetablesList").append(html);
	}

    for(var i=0;i<extras.length;i++) {
    	//console.log(extras[i]);
		var html = 
		'<input id="' + extras[i].name + '" type="checkbox" name="extras" value="' + extras[i].name +
		'" data-price="' + extras[i].price.toFixed(2) + '" data-id="' + extras[i].tacoFixinId  + '"><label for="' + extras[i].name + '">' + ' ' + extras[i].name + ' $' + extras[i].price.toFixed(2) + '</label><br>';
		$("#extrasList").append(html);
	}

    for(var i=0;i<cheese.length;i++) {
    	//console.log(cheese[i]);
		var html = 
		'<input id="' + cheese[i].name + '" type="radio" name="cheese" value="' + cheese[i].name +
		'" data-price="' + cheese[i].price.toFixed(2) + '" data-id="' + cheese[i].tacoFixinId  + '"><label for="' + cheese[i].name + '">' + ' ' + cheese[i].name + ' $' + cheese[i].price.toFixed(2) + '</label><br>';
		$("#cheeseList").append(html);
	}		



$('input[id="' + firstFilling + '"]').prop("checked",true);
$('input[id="' + firstTortilla + '"]').prop("checked",true);

document.getElementById("vegetableClear").onclick = (function (e) {
	$('input[name="vegetables"]:checked').prop("checked", false);
});

document.getElementById("clearButton").onclick = (function (e) {
document.getElementById("tacoForm").reset();
$('input[id="' + firstFilling + '"]').prop("checked",true);
$('input[id="' + firstTortilla + '"]').prop("checked",true);

});

var tacoNumber = 1;
var orderTotal = 0;
$("#totalSpan").text('' + orderTotal.toFixed(2));

document.getElementById("lastOrder").onclick = (function (e) {
	
});

document.getElementById("tacoForm").onsubmit = (function formSubmit(e) {
e.preventDefault();

var vegetablesList = $('input[name="vegetables"]:checked').map(function() {
    return this;
}).get();

var extrasList = $('input[name="extras"]:checked').map(function() {
    return this;
}).get();

var tacoTotal = parseFloat($('input[name="filling"]:checked').data('price'),10) +
	parseFloat($('input[name="tortilla"]:checked').data('price'),10) +
	parseFloat($('input[name="rice"]:checked').data('price'),10) +
	parseFloat($('input[name="beans"]:checked').data('price'),10) +
	parseFloat($('input[name="cheese"]:checked').data('price'),10);
for(var i=0;i<extrasList.length;i++) {
	tacoTotal = tacoTotal + parseFloat($(extrasList[i]).data('price'));
}

tacoTotal = tacoTotal * parseInt($('select[name="Quantity"]').val());

//console.log($(extrasList[1]).data('price'));
//console.log($(extrasList[1]).val());

console.log()

$("#tacoSack").append('<table class="taco" id="taco' + tacoNumber + '"><tr><td>Taco #' + tacoNumber + '</td><td class="right">Quantity: <select onchange="quantityChange(this)" id="q' + tacoNumber +  '"name="quantity' + tacoNumber + '"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select>' + '</tr><tr><td data-id="' + $('input[name="filling"]:checked').data('id') + '">' + $('input[name="filling"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="filling"]:checked').data('price') + '</td></tr><tr><td data-id="' + $('input[name="tortilla"]:checked').data('id') + '">' + $('input[name="tortilla"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="tortilla"]:checked').data('price') + '</td></tr><tr><td data-id="' + $('input[name="rice"]:checked').data('id') + '">' + $('input[name="rice"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="rice"]:checked').data('price') + '</td></tr><tr><td data-id="' + $('input[name="beans"]:checked').data('id') + '">' + $('input[name="beans"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="beans"]:checked').data('price') + '</td></tr><tr><td data-id="' + $('input[name="sauces"]:checked').data('id') + '">' + $('input[name="sauces"]:checked').val() + '</td><td class="right">$0.00</td></tr></table>');


$('#q' + tacoNumber).val($('select[name="Quantity"]').val());


for(var i=0;i<vegetablesList.length;i++) {
	$('#taco' + tacoNumber).append('<tr><td data-id="' + $(vegetablesList[i]).data('id') + '">' + $(vegetablesList[i]).val() + '</td><td class="right">$0.00</td></tr>');
}

$('#taco' + tacoNumber).append('<tr><td data-id="' + $('input[name="cheese"]:checked').data('id') + '">' + $('input[name="cheese"]:checked').val() + '</td><td class="right">' + "$" + $('input[name="cheese"]:checked').data('price') + '</td></tr>');

for(var i=0;i<extrasList.length;i++) {
	$('#taco' + tacoNumber).append('<tr><td data-id="' + $(extrasList[i]).data('id') + '">' + $(extrasList[i]).val() + '</td><td class="right">$' +  $(extrasList[i]).data('price') + '</td></tr>');
}

$('#taco' + tacoNumber).append('<tr><td>Total:</td><td id="tacoTotal' + tacoNumber + '" class="right">$' + parseFloat(tacoTotal).toFixed(2) + '</td></tr></table>');
$("#tacoSack").append('<input type="button" class="removeButton" id="remove' + tacoNumber + '" value="Remove">');



document.getElementsByClassName("removeButton")[tacoNumber-1].onclick = (function (e) {
	var thisTaco = this.getAttribute("id");
	var thisTacoNumber = thisTaco.substring(6,7);
	var thisTacoPrice = $('tacoTotal' + thisTacoNumber);
	console.log('tacoTotal' + thisTacoNumber);
	console.log(thisTacoPrice);

	var tacoIDToRemove = 'taco' + thisTacoNumber;
	var tacoToRemove = document.getElementById(tacoIDToRemove);
	tacoToRemove.parentNode.removeChild(tacoToRemove);


	this.parentNode.removeChild(this);
	tacoNumber--;

});

orderTotal = orderTotal + tacoTotal;
$("#totalSpan").text('' + orderTotal.toFixed(2));

document.getElementById("tacoForm").reset();
$('input[id="' + firstFilling + '"]').prop("checked",true);
$('input[id="' + firstTortilla + '"]').prop("checked",true);
tacoNumber++;
});

document.getElementById("sackSubmit").onclick = (function formSubmit(e) {


var order = {};
if($.cookie("user_id")) {
	order.user_id = $.cookie("user_id");
}
else {
	order.user_id = 0;
}

var listOfTacos = document.getElementsByClassName("taco");
console.log(listOfTacos);
console.log(listOfTacos.length);

var totalPrice = parseFloat($(document.getElementById("totalSpan")).html()).toFixed(2);
order.total = parseFloat(totalPrice);
order.tacos = [];


for(var i=0;i<listOfTacos.length;i++) {


	var listOfIds = new Array();
	var idNumber = 0;

	var listOfFixins = listOfTacos[i].getElementsByTagName("td");
	var tacoQuantity = $(listOfFixins[1].getElementsByTagName("select")[0]).val();

	for(var j=2;j<listOfFixins.length-2;j=j+2) {
		//console.log(listOfFixins[j]);
		listOfIds[idNumber] = $(listOfFixins[j]).data('id');
		idNumber++;
	}

	var taco = {
    qty: tacoQuantity,
    fixings: listOfIds
	};
	order.tacos.push(taco);

	$.cookie("orderData",order);

}


console.log(order);

});


});


function quantityChange(e) {
	var currentTacoID = "taco" + $(e).attr("id").substring(1,2);
	var currentTaco = document.getElementById(currentTacoID);
	var pricesToAdd = currentTaco.getElementsByClassName("right");
	var priceTotal = 0;
	for(var i=1;i<pricesToAdd.length-1;i++) {
		var currentPrice = parseFloat(pricesToAdd[i].innerHTML.substring(1,5));
		//console.log(currentPrice);
		priceTotal = priceTotal + currentPrice;
	}

	var totalChanger = parseFloat($('#totalSpan').html()) - parseFloat(pricesToAdd[pricesToAdd.length-1].innerHTML.substring(1,5));

	priceTotal = priceTotal * $('select[id="q' + $(e).attr("id").substring(1,2) + '"]').val();
	$(pricesToAdd[pricesToAdd.length-1]).text("$" + priceTotal.toFixed(2));

	totalChanger = totalChanger + priceTotal;

	orderTotal = totalChanger;

	$('#totalSpan').text('' + totalChanger.toFixed(2));
};