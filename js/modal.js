window.onload=function(){
var loginButton = document.getElementById('login');
var paymentButton = document.getElementById('pay'); 
var accountButton = document.getElementById('createAccount');  
var overlay = document.getElementById('overlay'); 

overlay.addEventListener('click',hideModal); 
loginButton.addEventListener('click',displayLoginModal);
paymentButton.addEventListener('click',displayPayModal);
accountButton.addEventListener('click',displayAccountModal);



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