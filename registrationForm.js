var registeredAccountArray = [];

var newAccount = {
name:document.getElementById('nameID').value,
email:document.getElementById('emailID').value,
password:document.getElementById('passwordID').value
};
function addAccount() {
	
	let newAccount ={
		name:document.getElementById('nameID').value,
		email:document.getElementById('emailID').value,
		password:document.getElementById('passwordID').value
	};
	registeredAccountArray.push(newAccount);
	document.forms[0].reset();

console.warn('added account information', {registeredAccountArray});
	document.addEventListener('DOMContentLoaded',()=>{
		document.getElementById('submitSignUp').addEventListener('click', addAccount);
		
	});
};

function passwordStrength() {
	const indicator = document.querySelector(".indicator");
	const input = document.querySelector("input");
	const weak = document.querySelector(".Weak");
	const decent = document.querySelector(".Decent");
	const strong = document.querySelector(".Strong");
	const text = document.querySelector("text");
	let regE
	if(input.value !=""){
		indicator.style.display = "block";
		indicator.style.display = "flex";
	}
	else{
		indicator.style.display = "none";
	}

}