const {app, BrowserWindow, dialog} = require('electron');
//
function onClick_OpenFile() {
    const label = document.getElementById('label');
    label.innerText= dialog.showOpenDialog({properties: ['openFile']})
    // label.innerText= "test";
}

function onClick_CustomOpenFile() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    options.message = '打开我的文件';
    options.buttonLabel = '选择';
    //  Mac OSX 默认目录是桌面
    options.defaultPath = '.';
    options.properties = ['openFile'];
    label.innerText= dialog.showOpenDialog(options)
}

function onClick_FileType(){
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    options.buttonLabel = '选择';
    //  Mac OSX 默认目录是桌面
    options.defaultPath = '.';
    options.properties = ['openFile'];
    options.filters = [
        {name: '图像文件', extensions: ['jpg', 'png', 'gif']},
        {name: '视频文件', extensions: ['mkv', 'avi', 'mp4']},
        {name: '音频文件', extensions: ['mp3','wav']},
        {name: '所有文件', extensions: ['*']}
    ]
    label.innerText= dialog.showOpenDialog(options)
}

function onClick_OpenAndCreateDirectory() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开目录';
    //  createDirectory仅用于Mac OS 系统
    options.properties = ['openDirectory','createDirectory'];
    label.innerText= dialog.showOpenDialog(options)
}

function onClick_MultiSelection() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.message = '选择多个文件和目录';

    options.properties = ['openFile','multiSelections'];
    if (process.platform === 'darwin') {
        options.properties.push('openDirectory');
    }
    label.innerText= dialog.showOpenDialog(options)
}

function onClick_Callback() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.message = '选择多个文件和目录';

    options.properties = ['openFile','multiSelections'];
    if (process.platform === 'darwin') {
        options.properties.push('openDirectory');
    }
    dialog.showOpenDialog(options,(filePaths) =>{
        for(var i = 0; i < filePaths.length;i++) {
            label.innerText += filePaths[i] + '\r\n';
        }

    });
}

function createWindow () {
    //创建浏览器窗口
    win = new BrowserWindow({width: 800, height: 600});

    //然后加载应用的 index.html
    win.loadFile('index.html');
    //关闭当前窗口后触发 closed 事件
    win.on('closed', () => {
        console.log('closed');
        win = null;
    })
}
//Electron 初始化完成后触发 ready 事件
app.on('ready', createWindow)
//  所有的窗口关闭后触发 window-all-closed 事件
app.on('window-all-closed', () => {
    console.log('window-all-closed');
    //非 Mac OS X 平台，直接调用 app.quit() 方法退出程序
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
//窗口激活后触发 activate 事件 under mac system the app would not quit
app.on('activate', () => {
    console.log('activate');
    if (win === null) {
        createWindow();
    }
})
