// const remote = require('electron').remote;
// const userInfo = remote.require(`./GUIAPI.js`);
const remote = require('electron').remote;
const main = remote.require(`./index.js`);
const socket = main.socket;

let curUser = '';
let curRoom = '';
let roomMsgList = [];

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
    curRoom = roomName;
	mainPageReturnMsg.innerText = "Current room is " + curRoom;

	if(roomMsgList[curRoom] === undefined) roomMsgList[curRoom] = [];
});

// open the thread to
ipcRenderer.on('roomBoardcast', function (event,data,fromWhichRoom) {
	// push into array
	roomMsgList[fromWhichRoom].push(data);

	// clear up the stuff
	const roomList = document.getElementById('msgList');
	roomList.innerText = '';

	//push all data recorded in current room
	for(let i = 0; i < roomMsgList[curRoom].length; i+=1){
		const listElement = document.createElement('li');
		listElement.appendChild(document.createTextNode(roomMsgList[curRoom][i]));
		roomList.appendChild(listElement);
	}
});

function sendMessage(){
	const msgSendForm = document.getElementById("msgSendForm");
	const {sendMsgBox} = msgSendForm;
	socket.emit('roomBoardcastTest', curRoom, sendMsgBox.value, curUser);
}