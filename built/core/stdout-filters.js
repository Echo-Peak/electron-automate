let netstat = require('./filters/win-net');
let windows_environment = require('./filters/win-environment');
let winProcess = require('./filters/win-process');
let winService = require('./filters/win-services');
module.exports = {
  windows:{
    env:windows_environment,
    net:netstat,
    processes:winProcess,
    services:winService
  },
  linux:{

  }
}
