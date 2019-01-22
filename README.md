# Electron
Electron Learning Folder

# Note

`exports` and `function` are the same thing but cannot use exports function as normal js function.

export.function is the Nodejs style with the application of `document` and `addEventListener`.

while the `function` is Javascript and Html supported in the Html atrribute `onclick`.

NOTE that

the `console.log` would only show up in the index.js(entry for electron) not show up in html script file.

And also, cos the electron and the html/js are running seperately so you cannot directly use `exports` to

output the function or variable. instead, using remote as the export API:

```

const remote = require('electron').remote;
const main = remote.require(`./index.js`);

```

### One more thing!

Dont include both electron entry and html/js in the html file

### One more thing!

there is two way to communicate the window 

```
	// on window part
	win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(`file://${__dirname}/mainPage.html`)
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('ping', 'whoooooooh!')
    })

	// on response 
	var ipcRenderer = require('electron').ipcRenderer;
	ipcRenderer.on('ping', function (event,store) {
	    console.log(store);
	    const label = document.getElementById('label2');
	    label.innerText = 2222;
	});

```
or

```

win = window.open('mainPage.html');
win.postMessage('abcd', '*');

```




