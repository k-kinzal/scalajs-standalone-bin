'use strict';

module.exports = require('./common')()
    .use(process.platform === 'win32' ? 'bin/scalajsp.bat' : 'bin/scalajsp')
