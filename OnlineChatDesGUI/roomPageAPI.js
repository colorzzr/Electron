
'use strict';

const remote = require('electron').remote;
const main = remote.require(`./index.js`);
const socket = main.socket;


const form = document.getElementById('roomForm');
// form.addEventListener('submit', addRoom);

let curUser = '';

// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('login', function (event,userName) {
    // set the user name
    curUser = userName;


    // by default join the default room for test
    socket.emit('join', 'default', curUser, returnMsg=>{
		main.roomChange(returnMsg.data);
	});

});

function addRoom(){
	// const removeButton = document.createElement('button')
	// removeButton.appendChild(document.createTextNode('remove'))
	// document.body.appendChild(removeButton);
	// const roomList = document.getElementById('roomList');
	// const listElement = document.createElement('li');
	// listElement.appendChild(document.createTextNode("test"));
	// roomList.appendChild(listElement);
	
	//get the input room name and create in list
	const { roomName } = roomForm;
	if(roomName !== '' || roomName !== undefined){
		const roomButton = document.createElement('button')
		roomButton.appendChild(document.createTextNode(roomName.value));
		roomButton.setAttribute("onclick", "changeRoom('"+ roomName.value +"')");

		//remember not use const here or would not change
		const roomList = document.getElementById('roomList');
		const listElement = document.createElement('li');
		listElement.appendChild(roomButton);
		roomList.appendChild(listElement);

		//and join the room 
		socket.emit('join', roomName.value, curUser, returnMsg=>{
			main.roomChange(roomName.value);
		});
	}

}

// send to main page say I am change the room
function changeRoom(room){
	//main.roomChange(e.target.name);
	const testL = document.getElementById('roomTest');
	testL.innerText = room;
	main.roomChange(room);
}