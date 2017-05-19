'use strict';

var config = require('./');

module.exports = {
  server: {
    baseDir: config.buildPath
  },
  files: [config.buildPath],
  open: true,
  proxy: ''
};
