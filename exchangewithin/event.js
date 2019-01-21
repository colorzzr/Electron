const electron = require('electron')
const {app, BrowserWindow} = electron


app.on('ready', () =>{
    let win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('index.html')
})

// const remote = require('electron').remote;
const {dialog, ipcMain} = require('electron');
// const dialog = remote.dialog;
// const ipcMain = remote.ipcMain;
const {ipcRenderer} = require('electron')
ipcMain.on('close', (event, str) => {
    alert(str);
});
var win;
//创建并显示一个主窗口
function onClick_OpenWindow() {
    //win = window.open('https://geekori.com/test/child.html')
    // win = window.open('index.html','接收消息','width=300,height=200')
    win = window.open('child.html')
}

function onClick_Message() {

    win.postMessage('abcd', '*');

}

// function onClick_Close(){
//     //close the previous one
//     if(win != undefined) win.close();
// }

var label
function onLoad() {
    label = document.getElementById('label');
    window.addEventListener('message', function (e) {
        alert(e.origin);
        label.innerText = e.data
    });
}
function onClick_Close() {
    // const win  =  remote.getCurrentWindow();
    // ipcRenderer.send('close','窗口已经关闭');
    win.close();
}

function onClick_Eval() {
    //通过 eval 方法设置 child 窗口中的 label 标签
    win.eval('label.innerText="hello world"')
}
