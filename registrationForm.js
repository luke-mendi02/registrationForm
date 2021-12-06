var registeredAccountArray = [];

var newAccount = {
name:document.getElementById('nameID').value,
email:document.getElementById('emailID').value,
password:document.getElementById('passwordID').value
};
var oldAccount = {

};
const addAccount  = (ev) => {
	ev.preventDefault();
	let newAccount ={
		name:document.getElementById('nameID').value,
		email:document.getElementById('emailID').value,
		password:document.getElementById('passwordID').value
	};
	registeredAccountArray.push(newAccount);
	document.forms[0].reset();

console.warn('added', {registeredAccountArray});
let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(registeredAccountArray, '\t', 2)

	document.addEventListener('DOMContentLoaded',()=>{
		document.getElementById('submitSignUp').addEventListener('click', addAccount);
		
	});
};