// const remote = require('electron').remote;
// const userInfo = remote.require(`./GUIAPI.js`);


function onLoad(){
	const label = document.getElementById('label2');
	window.addEventListener('message', function (e) {
        // alert(e.origin);
        label.innerText = e.data
    });
}


