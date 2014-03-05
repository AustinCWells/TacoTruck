window.onload=function(){
var loginButton = document.getElementsByClassName('login');
var paymentButton = document.getElementsByClassName('pay'); 
var accountButton = document.getElementsByClassName('createAccount');  
var overlay = document.getElementById('overlay'); 
var closeX = document.getElementsByClassName('close'); 

for(var i= 0; i < closeX.length; i++)
{
	console.log(closeX[i]);
	closeX[i].addEventListener('click',hideModal); 
}
overlay.addEventListener('click',hideModal); 
for(var i = 0; i < loginButton.length; i++)
{
	loginButton[i].addEventListener('click',displayLoginModal);
}
for(var i = 0; i < paymentButton.length; i++)
{
paymentButton[i].addEventListener('click',displayPayModal);
}
for(var i = 0; i < accountButton.length; i++)
{
accountButton[i].addEventListener('click',displayAccountModal);
}



function displayLoginModal()
{
	displayModal('loginModal');
}
function displayPayModal()
{
	displayModal('paymentModal');
}
function displayAccountModal()
{
	displayModal('accountModal');
}


function displayModal(modalId)
{
	var modal = document.getElementById(modalId)
	var background = document.getElementById("overlay");
	background.className = "overlay"
	modal.className = "displayModal";
	var width = modal.clientWidth; 
	var height = modal.clientHeight; 
	var displacementX = '-'+ (width/2) + 'px';
	var displacementY = '-' + (height/2) + 'px';   
	modal.style.marginLeft = displacementX;
	modal.style.marginTop = displacementY; 
	console.log(width + " " + height);


}



function hideModal()
{
	document.getElementById('loginModal').className = "modal";
	document.getElementById('paymentModal').className = "modal";
	document.getElementById('accountModal').className = "modal";
	document.getElementById("overlay").className = "";  


}

}