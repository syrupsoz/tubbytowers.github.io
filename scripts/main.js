let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/joji.jpg') {
		myImage.setAttribute ('src','images/earth.jpg');
	} 
	if(mySrc === 'images/earth.jpg') {
		myImage.setAttribute ('src','images/spice.jpg');
	}
	if(mySrc === 'images/spice.jpg') {
		myImage.setAttribute ('src','images/joji.jpg');
	}
}
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Welcome to Tubby Towers, ' + myName;
	}
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to Tubby Towers, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}