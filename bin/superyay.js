const config = require('../../package.json');

// Validation
if (!config) {
  return new Error('Unable to locate package.json');
}

if (!config.engines) {
  return new Error('No versions of Node.js or npm set in package.json. Please add them under "engines".');
} else if (!config.engines.node) {
  return new Error('No node version set in package.json. Please add it under "engines".');
} else if (!config.engines.npm) {
  return new Error('No npm version set in package.json. Please add it under "engines".');
}

const getNodeVersion = require('../getNodeVersion.js');
const getNpmVersion = require('../getNpmVersion.js');
const checkVersions = require('../checkVersions.js');

// Perform Check
getNodeVersion(config.node, config.npm)
  .then(getNpmVersion)
  .then(checkVersions);