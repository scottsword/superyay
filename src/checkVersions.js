/**
 * Compares all the version information and constructes the necessary output.
 * @param {object} versionStore - Store for holding version information.
 * well as the active Node.js version.
 */
module.exports = (versionStore) => {
  const isNodeValid = versionStore.node === versionStore.current.node;
  const isNpmValid = versionStore.npm === versionStore.current.npm;

  console.log('checkVersions');

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
    if (versionStore.config) {
        if (versionStore.config.link) {
          console.log('For more information see: ');
          console.log(versionStore.config.link);
        }
    }

    console.log('*******************************************************************************');
  }

};