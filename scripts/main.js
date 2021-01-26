//welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
	let myName = prompt('Pls enter your name.');
	if (!myName) {
		setUsername();
	} else {
		localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to Mitch Comics, ' + myName;
    }
}
//initialization code
if (!localStorage.getItem('name')) {
	setUsername;
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to Mitch Comics, ' + storedName;
}	
myButton.onclick = function() {
	setUsername();
}
