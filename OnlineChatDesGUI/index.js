const electron = require('electron')
const {app, BrowserWindow} = electron;

const io = require('socket.io-client')
// import io from 'socket.io-client';
var socket = io("http://localhost:3000");

let main;

app.on('ready', () =>{
    main = new BrowserWindow({width: 400, 
    	height: 100, 
    	x: 10,
    	y: 10,
    });
    main.loadFile('welcome.html');

    let loginPage = new BrowserWindow({width: 800, height: 600, parent: main});
    loginPage.loadFile('loginPage.html');
})

// const openMainPage = function(){
// 	// let test = new BrowserWindow({width: 600, height: 800, parent: main});
// 	// test.loadFile('./mainPage.html');
// 	const label1 = document.getElementById("label1");
// 	label1.innerText = 55;
// }
// socket.emit('hello', 'test', 'ccc', returnMsg=>{
// 	// label1.innerText = returnMsg;
// 	console.log(returnMsg);
// });

module.exports.socket = socket;
var tt = {
	data:10,
}
module.exports.tt = tt;
module.exports.main = main;
module.exports.openWindow = function(fileName){
	let win = new BrowserWindow({width: 800, height: 600, parent: main})
    win.loadURL(`file://${__dirname}/` + fileName + `.html`)
}
// 
// module.exports.openWindow = function(fileName){
//     let win = new BrowserWindow({width: 800, height: 600})
//     // win.loadURL(`file://${__dirname}/` + fileName + `.html`)
//     win.loadFile('./mainPage.html');
// }

console.log(module);