// const remote = require('electron').remote;
// const userInfo = remote.require(`./GUIAPI.js`);
const remote = require('electron').remote;
const main = remote.require(`./index.js`);
const socket = main.socket;

let curUser = '';

// renderer process
var ipcRenderer = require('electron').ipcRenderer;

//hold on for the login
ipcRenderer.on('login', function (event,userName) {
    const label = document.getElementById('curUser');
    // set the user name
    curUser = userName;
    label.innerText = "Current User is " + curUser;


    // by default join the default room for test
 //    socket.emit('join', 'default', curUser, returnMsg=>{
	// 	const mainPageReturnMsg = document.getElementById('mainPageReturnMsg');
	// 	mainPageReturnMsg.innerText = "Current room is " + returnMsg.data;
	// });
});

//hold on for room change
ipcRenderer.on('join', function (event,roomName) {
    const mainPageReturnMsg = document.getElementById('mainPageReturnMsg');
	mainPageReturnMsg.innerText = "Current room is " + roomName;
});

function sendMessage(){
	const msgSendForm = document.getElementById("msgSendForm");
	const {sendMsgBox} = msgSendForm;
	socket.emit('roomBoardcastTest', 'default', sendMsgBox.value, curUser);
}