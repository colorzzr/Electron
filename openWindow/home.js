const remote = require('electron').remote
const main = remote.require(`./first.js`)

var button = document.createElement('button');
button.textContent = 'Open Window'
button.addEventListener('click', () =>{
    main.openWindow('pageTwo')
}, false)

document.body.appendChild(button)

button = document.createElement('button');

button.textContent = 'pop up';
button.addEventListener('click', () => {
	main.test()
}, false)

document.body.appendChild(button)

function myFunc(){
	const label = document.getElementById('label');
    label.innerText= 'test'
}