const runCommand = require('./runCommand.js');

/**
 * Gets the active version of npm and adds it to the version store.
 * @param {object} versionStore - Store for holding version information.
 * well as the active Node.js version.
 * @returns {promise} Resolves an object that serves as version data store.
 */
module.exports = (versionStore) => {
  return runCommand('npm -v')
      .then(npmVersion => {
        return Object.assign({
          npm: npmVersion.replace('\n', '')
        }, versionStore);
      });
};