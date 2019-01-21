`use strict`

console.log('test export');

const myVal = 222;

console.log(myVal);

module.exports.myVal = myVal;


// const io = require('socket.io-client')
// // import io from 'socket.io-client';
// var socket = io("http://localhost:3000");

// module.exports.socket = socket;

function test(){
	console.log('textPos');
}

module.exports.test = test;


console.log(module);