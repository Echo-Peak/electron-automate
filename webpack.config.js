var webpack = require('webpack');
var path = require('path');
var fs = require('fs')
var production = false;
var colorize = require('colors');
var enableSourceMaps = false;
var socketIO = require('socket.io-client');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var config = require('./built/config');



let logger = socketIO.connect(`http://localhost:${config.ports.main}/logger`, {reconnect:true});
let System = socketIO.connect(`http://localhost:${config.ports.main}/system`, {reconnect:true});


let use = process.argv[process.argv.indexOf('--use') + 1];
System.emit('who' ,{name:'webpack' ,pid:process.pid, id:use});

System.on('quit',function(){
  process.exit();
})

process.on('SIGTERM' ,function(){
  System.emit('quit');
  process.exit();
})



let options =  {
   entry: {
      'bundle': `${__dirname}/src/${use}/entry.jsx`,
      'vendors': ['react', 'react-router', 'react-dom', 'material-ui', 'react-motion', 'mobx', 'mobx-react']
  },
  //  target:'node',
  output: {
      path: `${__dirname}/built/static/${use}`,
      filename: '[name].js'
  },
  cache: true,
  watch: true,
  target:'web',

  module: {
      loaders: [{
          test: /\.jsx$/,
          include: path.resolve(__dirname, `src/${use}`),
          //exclude:[/node_modules/],
          loader: 'babel',
          query: {
              presets: ['stage-0', 'es2015', 'react'],
              plugins: ['transform-es2015-modules-commonjs', 'transform-decorators-legacy', 'transform-class-properties']
          }
      }, ]

  },
  resolve: {
      extensions: ['.js', '.jsx', ''],
      modulesDirectories: ['node_modules']
  },

  plugins: [
      new CommonsChunkPlugin('vendors', "vendors.js"),
      new webpack.optimize.OccurrenceOrderPlugin(),
      function() {
          this.plugin("done", function(stats) {
              if (stats.compilation.errors && stats.compilation.errors.length) {

                  logger.emit('failed', {
                          msg: 'webpack compilation error',
                          error: stats.compilation.errors[0].error
                      })
                      //console BEEP
                  console.log("\007" + stats.compilation.errors[0].error);
                  return
              }
              console.log('webpack succses');
              logger.emit('log', {
                  event: 'webpack',
                  value: 'succsess',
                  target: use
              });
              System.emit('reload');
          });
      }

  ]
}


module.exports = options;
