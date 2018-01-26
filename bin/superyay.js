#!/usr/bin/env node
const config = require('../../../package.json');

// Validation
if (!config) {
  throw new Error('Unable to locate package.json');
}

try {
    if (!config.engines) {
        const err = new Error('Superyay couldn\'t find any versions of Node.js or npm set in package.json. Please add them under "engines".');
        throw err.message;
    } else if (!config.engines.node) {
        const err = new Error('Superyay couldn\'t find a node version set in package.json. Please add it under "engines".');
        throw err.message;
    } else if (!config.engines.npm) {
        const err = new Error('Superyay couldn\'t find an npm version set in package.json. Please add it under "engines".');
        throw err.message;
    }
}

catch(e) {
  console.log('**************************************************************************************************************');
  console.log('\033[31m ' + e + '\033[0m');
  console.log('**************************************************************************************************************');
}

const getNodeVersion = require('../src/getNodeVersion.js');
const getNpmVersion = require('../src/getNpmVersion.js');
const checkVersions = require('../src/checkVersions.js');

// Perform Check
getNodeVersion(config.engines, config.superyay)
  .then(getNpmVersion)
  .then(checkVersions)
  .catch((err) => {
    console.log('Superyay Error: ' + err);
  });