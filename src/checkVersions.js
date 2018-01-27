/**
 * Compares all the version information and constructes the necessary output.
 * @param {object} versionStore - Store for holding version information.
 * well as the active Node.js version.
 */
module.exports = (versionStore) => {
  const isNodeValid = versionStore.node === versionStore.current.node;
  const isNpmValid = versionStore.npm === versionStore.current.npm;

  if (!isNodeValid || !isNpmValid) {
    console.log('*******************************************************************************');

    // Handle Messaging
    if (!isNodeValid) {
      console.log('\033[31mWARNING\033[0m: Your version of Node.js is not the supported version for this project!');
      console.log('Superyay was looking for \033[32m' + versionStore.current.node + '\033[0m, but found \033[33m' + versionStore.node + '\033[0m.');
    }

    if (!isNpmValid) {
      console.log('\033[31mWARNING\033[0m: Your version of npm is not the supported version for this project!');
      console.log('Superyay was looking for \033[32m' + versionStore.current.npm + '\033[0m, but found \033[33m' + versionStore.npm + '\033[0m.');
    }

    // Handle Solutions
    if (versionStore.config) {
        if (versionStore.config.link) {
          console.log('For more information see: ');
          console.log(versionStore.config.link);
        }
    }

    console.log('*******************************************************************************');

    // Exit out so no other scripts run
    if (!isNodeValid || !isNpmValid) {
        process.exit(1);
    }

  } else {
    console.log('\033[32mSuperyay checks passed!\033[0m Using Node.js v' + versionStore.current.node + ' & npm v' + versionStore.current.npm);
  }

};