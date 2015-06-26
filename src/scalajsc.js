'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

module.exports =
  new BinWrapper()
    .dest(path.join(path.dirname(__dirname), 'vendor'))
    .use(process.platform === 'win32' ? 'bin/scalajsc.bat' : 'bin/scalajsc')
