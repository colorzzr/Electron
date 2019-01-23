// const remote = require('electron').remote;
// const userInfo = remote.require(`./GUIAPI.js`);
const remote = require('electron').remote;
const main = remote.require(`./index.js`);
const socket = main.socket;

// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('login', function (event,userName) {
    const label = document.getElementById('label2');
    label.innerText = "Current User is " + userName;


    // by default join the default room for test
    socket.emit('join', 'default', userName, returnMsg=>{
		const mainPageReturnMsg = document.getElementById('mainPageReturnMsg');
		mainPageReturnMsg.innerText = "Current room is " + returnMsg.data;
	});
});