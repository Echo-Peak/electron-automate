# electron-automate
*Windows automation utility using electron & robotjs*.
**Note:** This is a work in progress and nowhere close to a release.

## what is electron-automate?
`electron-automate` is application that runs in the background and acts like a server to perform various actions on the host from a web browser pointed at the host ip + port.

### What it can do
* keyboard shortcuts
* stream audio
* stream pictures / video / youtube
* execute shell commands
* stream mouse position
* create / run scripts
* start / stop services
* start / kill processes
* access file system
* create dynamic browser windows
* power settings
* create / save tasks that runs a series of actions
* stream key strokes



### config
this application uses a config file to store various information thought the app both in development & when packaged.
here's the breakdown.

* **name** - this is the name of the app  when packaged.
* **routeLength** - this is the length of the generated urls
* **ports**
	* main - main port the parent process listens to
* **alias**
	* nodejs
		* rename - if true then when the application starts it will rename `node-alias` to name
		* name - name of copy of node stand-alone executable `node-alias`
* **security**
	* roles
		* admin - admin crptyo key
		* user - user crypto key
		* guest - guest crypto key
### build system
the build system uses a command interface that runs various scripts.

to pass arguments to a script use `<command>:<value>` key pairs
currents arguments keypairs

* **shell**:[*boolean*] - spawns script in a shell otherwise spawn in the current process.
*  **stdout**:[*boolean*] - use stdout of script in main process otherwise its ignored.
* **stderr**:[*boolean*] - use stderr of script in main process otherwise its ignored.
* **kill**:[*string*] - kills the script.

#### Available commands
* `webpack` - uses the directory from within src.  **use**:[*string*]
* `test `- runs mocha tests. **watch**:[*boolean*]
* `restart`- restarts electron
* `build`- runs electron packager
* `help`- well...displays help.

### What is this node-alias?
this application requires robotjs a native module which requires electron to be recompiled which requires visual studio.
im not sure if there any other way to rebuild electron without lots of head aches.
i currently do not have the hard drive space requirements to install visual studio

so i use the nodejs environment to run robotjs inside and to prevent any mishaps i need to copy nodejs and rename it to prevent confusion.

permissions
[
	"file-system",
	"media",
	"system",
	"shell",
	"takser",
	"mouse",
	"keyboard",
	"npm",
	"app",
	"windows",
	"info",
	"services",
	"process",
	"scripts"
]
