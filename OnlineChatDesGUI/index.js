const electron = require('electron')
const {app, BrowserWindow} = electron;

const io = require('socket.io-client')
// import io from 'socket.io-client';
var socket = io("http://localhost:3000");
// var socket = io("http://18.223.112.55:3000");

socket.emit('hello', 'test', 'ccc', returnMsg=>{
 // label1.innerText = returnMsg;
 console.log(returnMsg);
});

let main;
app.on('ready', () =>{
    main = new BrowserWindow({width: 400, 
    	height: 100, 
    	x: 10,
    	y: 10,
    });
    main.loadFile('welcome.html');

    let loginPage = new BrowserWindow({x: 10, y: 200, width: 400, height: 400, parent: main});
    loginPage.loadFile('loginPage.html');

    module.exports.main = main;
})

module.exports.socket = socket;
var tt = {
	data:10,
}
module.exports.tt = tt;

var win;
module.exports.openWindow = function(userName){
	// win = new BrowserWindow({width: 800, height: 600, parent: main});
    // win.open('mainPage.html');
    // win.once('show', ()=>{
    //     win.postMessage('abcd', '*');
    // })
    // win = window.open('mainPage.html');
    win = new BrowserWindow({ width: 400, height: 400, parent: main})
    win.loadURL(`file://${__dirname}/mainPage.html`)
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('login', userName)
    })
}

module.exports.childSend = function(){
    win.webContents.send('ping', 'whoooooooh!')
}


// 
// module.exports.openWindow = function(fileName){
//     let win = new BrowserWindow({width: 800, height: 600})
//     // win.loadURL(`file://${__dirname}/` + fileName + `.html`)
//     win.loadFile('./mainPage.html');
// }

console.log(module);