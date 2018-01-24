const runCommand = require('./runCommand.js');

describe('runCommand', () => {

  test('Returns stdout', () => {
    runCommand('printf "Yolo"')
      .then(stdout => {
        expect(stdout).toBe('Yolo');
      })
      .catch(err => {
        expect(err).toBe('bar');
      });
  });

  test('Bad command returns error', () => {
    runCommand('prinf "Yolo"')
      .catch(err => {
        expect(typeof err).toBe('object');
      });
  });

});
