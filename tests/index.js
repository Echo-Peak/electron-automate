let socketIO = require('socket.io-client');
let config = require('../built/config');
let app = require('./app'); //entry point of express / electron

let logger = socketIO.connect(`http://localhost:${config.ports.main}/logger`, {reconnect:true});
let System = socketIO.connect(`http://localhost:${config.ports.main}/system`, {reconnect:true});


System.emit('who' ,{name:'mocha' ,pid:process.pid , id:'mocha-client'});
