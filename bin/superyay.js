#!/usr/bin/env node
const config = require('../../../package.json');

// Validation
if (!config) {
  throw new Error('Unable to locate package.json');
}

if (!config.engines) {
  throw new Error('No versions of Node.js or npm set in package.json. Please add them under "engines".');
} else if (!config.engines.node) {
  throw new Error('No node version set in package.json. Please add it under "engines".');
} else if (!config.engines.npm) {
  throw new Error('No npm version set in package.json. Please add it under "engines".');
}

const getNodeVersion = require('../src/getNodeVersion.js');
const getNpmVersion = require('../src/getNpmVersion.js');
const checkVersions = require('../src/checkVersions.js');

// Perform Check
getNodeVersion(config.engines, config.superyay)
  .then(getNpmVersion)
  .then(checkVersions);