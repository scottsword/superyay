const runCommand = require('./runCommand.js');

/**
 * Gets the active version of node and creates a version store for all version data.
 * @param {string} currentNodeVersion - Current version of Node.js that we want to enforce.
 * @param {string} currentNpmVer - Current version of npm that we want to enforce.
 * @returns {promise} Resolves an object that serves as version data store.
 */
module.exports = (currentNodeVersion, currentNpmVer) => {
  return runCommand('node -v')
      .then(version => {
        return {
          current: {
            node: currentNodeVersion,
            npm: currentNpmVer
          },
          node: version.replace('\n', '').replace('v', ''),
        };
      });
};