let installer = require('electron-installer-windows');
const path = require('path');

let electron_installer = Object.assign(_package.electron_installer ,{
  src:'./releases/packages/',
  dest:'./releases/installers'
});

electron_installer.src += '/'+`${process.argv[2]}-${process.platform}-${process.arch}`;

installer(electron_installer, function(err) {
    if (err) {
        console.error(err, err.stack)

    }
    console.log('Successfully created package at ' + electron_installer.dest)
})
