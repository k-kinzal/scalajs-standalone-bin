'use strict';

var Promise = require('bluebird');

(function install(retry) {
  Promise.resolve().then(function() {
    return require('./src/scalajsc')
             .runAsync(['-version'])
             .then(function() {
               console.log('scalajsc binary install successfully')
             });
  }).then(function() {
    return require('./src/scalajsc')
             .runAsync(['-version'])
             .then(function() {
               console.log('scalajsld binary install successfully')
             });
  }).then(function() {
    return require('./src/scalajsc')
             .runAsync(['-version'])
             .then(function() {
               console.log('scalajsp binary install successfully')
             });
  }).catch(function(err) {
    if (retry < 3) {
      console.warn('Retrying: ' + err);
      setTimeout(install, 3000, retry+1);
      return;
    }
    console.error(err);
  });
})(0);
