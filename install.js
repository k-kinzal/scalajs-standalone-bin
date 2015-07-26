'use strict';

var Promise = require('bluebird');

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
  throw err;
});
