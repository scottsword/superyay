const { exec } = require('child_process');

/**
 * A wrapper function for node.js's exec function that
 * provides a promise interface.
 * @param {string} command - Bash command to run via exec
 * @returns {promise} Resolves stdout for the executed command.
 */
module.exports = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        reject(err);
      } else {
        resolve(stdout);
      }
    })
  });
};