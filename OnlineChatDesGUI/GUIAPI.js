const remote = require('electron').remote;
const main = remote.require(`./index.js`);
const socket = main.socket;

// socket.emit('hello', 'test', 'ccc', returnMsg=>{
// 	// label1.innerText = returnMsg;
// 	console.log(returnMsg);
// });
let win;
function loginSubmit(){
	const loginForm = document.getElementById("loginForm");
	const {userName, userPassword} = loginForm;
	const label1 = document.getElementById("loginLabel");

	socket.emit('login', userName.value, userPassword.value, returnMsg=>{
		const retData = returnMsg.data;
		label1.innerText = retData;
		if(retData === 'success' ){
			main.openWindow(userName.value);	
		}
	});
}

function myFunc(){
	const label1 = document.getElementById("label1");
	label1.innerText = 2121;
}

function myFunc2(){
	document.body.appendChild(document.createTextNode("studentText"));
}

