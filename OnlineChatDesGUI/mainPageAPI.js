// const remote = require('electron').remote;
// const userInfo = remote.require(`./GUIAPI.js`);


function onLoad(){
	const label = document.getElementById('label2');
	window.addEventListener('message', function (e) {
        // alert(e.origin);
        label.innerText = e.data
    });
}


// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('ping', function (event,store) {
    console.log(store);
    const label = document.getElementById('label2');
    label.innerText = 2222;
});