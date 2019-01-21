const electron = require('electron')
const {app, BrowserWindow} = electron


app.on('ready', () =>{
    let win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('index.html')
})

const {dialog, ipcMain} = require('electron');
// const dialog = remote.dialog;
// const ipcMain = remote.ipcMain;
const {ipcRenderer} = require('electron')
ipcMain.on('close', (event, str) => {
    alert(str);
});
var win;
//  创建并显示一个主窗口
function onClick_OpenWindow() {
	//close the previous one
    if(win != undefined) win.close();
    win = window.open('pageTwo.html')
}
//  创建并显示一个主窗口（标题，属性）
function onClick_OpenWindow1() {
	//close the previous one
    if(win != undefined) win.close();
    win = window.open('./pageTwo.html','新的窗口','width=300,height=200')
}
//  获得焦点
function onClick_Focus() {
    if(win != undefined) {
       win.focus();
    }
}
//  失去焦点
function onClick_Blur() {
    if(win != undefined) {
        win.blur();
    }
}
//  调用子窗口中的打印对话框
function onClick_PrintDialog() {
    if (win != undefined) {
        win.print();
    }
}
//  关闭子窗口
function onClick_Close() {
    if (win != undefined) {
        if(win.closed)
        {
            alert('子窗口已经关闭，不需要再关闭');
            return;
        }
        win.close();
    }
}


