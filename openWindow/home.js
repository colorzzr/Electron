const remote = require('electron').remote
const main = remote.require(`./first.js`)

var button = document.createElement('button');
button.textContent = 'Open Window'
button.addEventListener('click', () =>{
    main.openWindow('pageTwo')
}, false)

document.body.appendChild(button)