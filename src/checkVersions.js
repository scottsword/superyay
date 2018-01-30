/**
 * Compares all the version information and constructes the necessary output.
 * @param {object} versionStore - Store for holding version information.
 * well as the active Node.js version.
 */
module.exports = (versionStore) => {
  const isNodeValid = versionStore.node === versionStore.current.node;
  const isNpmValid = versionStore.npm === versionStore.current.npm;

  if (!isNodeValid || !isNpmValid) {
    // Bookend Begin
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
        if (versionStore.config.info) {
          console.log('For more information see: ');
          console.log(versionStore.config.info);
        }
      if (!isNodeValid) {
        if (versionStore.config.installType) {
          console.log(' ');
          console.log('To update your version of Node.js run the following command:');
          if (versionStore.config.installType === 'nvm') {
            console.log('nvm install v' + versionStore.current.node);
          } else if (versionStore.config.installType === 'n') {
            console.log('n ' + versionStore.current.node);
          } else if (versionStore.config.installType === 'apt') {
            console.log('curl -sL https://deb.nodesource.com/setup_' + versionStore.current.node[0] + '.x | sudo -E bash -');
            console.log('sudo apt-get install -y nodejs');
          } else if (versionStore.config.installType === 'brew') {
            console.log('brew install node@' + versionStore.current.node[0]);
          } else {
            console.log('Unsupported install type provided: ' + versionStore.config.command);
            console.log('Supported types: nvm, n, apt, brew');
          }
        }
      }
      if (!isNpmValid) {
        console.log(' ');
        console.log('To update your version of npm run the following command:');
        console.log('npm i -g npm@' + versionStore.current.npm);
      }
    }

    // Bookend End
    console.log('*******************************************************************************');

    // Exit out so no other scripts run
    if (!isNodeValid || !isNpmValid) {
        process.exit(1);
    }

  } else {
    console.log('\033[32mSuperyay checks passed!\033[0m Using Node.js v' + versionStore.current.node + ' & npm v' + versionStore.current.npm);
  }

};