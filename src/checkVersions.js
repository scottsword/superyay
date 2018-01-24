/**
 * Compares all the version information and constructes the necessary output.
 * @param {object} versionStore - Store for holding version information.
 * well as the active Node.js version.
 */
exports.checkVersions = (versionStore) => {
  const isNodeValid = versionStore.node === versionStore.current.node;
  const isNpmValid = versionStore.npm === versionStore.current.npm;

  if (!isNodeValid || !isNpmValid) {
    console.log('*******************************************************************************');

    // Handle Messaging
    if (!isNodeValid) {
      console.log('\033[31mWARNING\033[0m: Your version of Node.js is not the supported version for this project!');
      console.log('We wanted \033[32m' + versionStore.current.node + '\033[0m, but you\'re currently using \033[33m' + versionStore.node + '\033[0m.');
    }

    if (!isNpmValid) {
      console.log('\033[31mWARNING\033[0m: Your version of npm is not the supported version for this project!');
      console.log('We wanted \033[32m' + versionStore.current.npm + '\033[0m, but you\'re currently using \033[33m' + versionStore.npm + '\033[0m.');
    }

    // Handle Solutions
    if (!isNodeValid && !isNpmValid) {
      console.log('To install the current supported node.js and npm versions run: n ' + versionStore.current.node + ' && npm install -g npm@' + versionStore.current.npm);
    } else if (!isNodeValid) {
      console.log('To install the current supported node.js version run: n ' + versionStore.current.node);
    } else if (!isNpmValid)  {
      console.log('To install the current supported npm version run: npm install -g npm@' + versionStore.current.npm);
    }

    console.log('For more information check out the wiki: ');
    console.log('https://tsheets.atlassian.net/wiki/spaces/DEV/pages/347635838/Instructions+Configuring+Local+Development+Environment+for+Building+Frontend+Assets');

    console.log('*******************************************************************************');
  }

};