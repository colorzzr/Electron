`use strict`

console.log('test import');

const test = require('./testexport.js');

console.log(test);

// const socket = test.socket;

// socket.emit('hello', 'test', 'ccc', returnMsg=>{
// 	// label1.innerText = returnMsg;
// 	console.log(returnMsg);
// });

test.test();

console.log('finish test import');
