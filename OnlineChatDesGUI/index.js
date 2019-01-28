const electron = require('electron')
const {app, BrowserWindow} = electron;

const io = require('socket.io-client')
// import io from 'socket.io-client';
var socket = io("http://localhost:3000");
// var socket = io("http://18.223.112.55:3000");

socket.on('roomBoardcast', data => {
    mainPageWin.webContents.send('roomBoardcast', data);
});

socket.emit('hello', 'test', 'ccc', returnMsg=>{
 // label1.innerText = returnMsg;
 console.log(returnMsg);
});

let main, loginPage;
app.on('ready', () =>{
    main = new BrowserWindow({width: 400, 
    	height: 100, 
    	x: 10,
    	y: 10,
    });
    main.loadFile('welcome.html');

    loginPage = new BrowserWindow({x: 10, y: 200, width: 400, height: 400, parent: main});
    loginPage.loadFile('loginPage.html');

    module.exports.main = main;
})

module.exports.socket = socket;

let mainPageWin, roomPage;
module.exports.openWindow = function(userName){
    // open the main system page
    mainPageWin = new BrowserWindow({x:300, y: 200, width: 300, height: 400, parent: main})
    mainPageWin.loadURL(`file://${__dirname}/mainPage.html`);
    mainPageWin.webContents.on('did-finish-load', () => {
        mainPageWin.webContents.send('login', userName)
    });

    // send the user name to room page
    roomPage = new BrowserWindow({x:600, y: 200, width: 200, height: 400, parent: main});
    roomPage.loadURL(`file://${__dirname}/roomPage.html`);
    roomPage.webContents.on('did-finish-load', () => {
        roomPage.webContents.send('login', userName)
    });

    // close the login
    loginPage.close();
}

// function for room page to send current room to main page
module.exports.roomChange = function(roomName){
    mainPageWin.webContents.send('join', roomName);
} 

module.exports.childSend = function(){
    mainPageWin.webContents.send('ping', 'whoooooooh!')
}


// 
// module.exports.openWindow = function(fileName){
//     let win = new BrowserWindow({width: 800, height: 600})
//     // win.loadURL(`file://${__dirname}/` + fileName + `.html`)
//     win.loadFile('./mainPage.html');
// }

console.log(module);