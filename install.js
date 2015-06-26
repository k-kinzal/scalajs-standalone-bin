'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

var scalaVersion = '2.11';
var scalaJsVersion = '0.6.3';

var bin = new BinWrapper({strip: 0});
bin.src('http://www.scala-js.org/files/scalajs_' + scalaVersion + '-' + scalaJsVersion + '.tgz', 'darwin');
bin.src('http://www.scala-js.org/files/scalajs_' + scalaVersion + '-' + scalaJsVersion + '.tgz', 'linux');
bin.dest(path.join(__dirname, 'vendor'));

bin.download(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  var binaries = require('./');
  Object.keys(binaries).forEach(function(name) {
    binaries[name].run(['-version'], function (err) {
      if (err) {
        throw err;
      }

      console.log(name + ' binary install successfully');
    });
  });
});



