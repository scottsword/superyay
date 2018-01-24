const CURRENT_NODE_VERSION = '6.10.2';
const CURRENT_NPM_VERSION = '5.5.1';
const getNodeVersion = require('../getNodeVersion.js');
const getNpmVersion = require('../getNpmVersion.js');
const checkVersions = require('../checkVersions.js');

// Perform Check
getNodeVersion(CURRENT_NODE_VERSION, CURRENT_NPM_VERSION)
  .then(getNpmVersion)
  .then(checkVersions);