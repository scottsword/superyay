const getNodeVersion = require('./getNodeVersion.js');

describe('getNodeVersion', () => {

  const currentVersions = {
    node: '6.10.2',
    npm: '5.5.1'
  };

  test('Creates version store', () => {
    getNodeVersion(currentVersions)
      .then(store => {
        expect(typeof store).toBe('object');
        expect(store.node).toBe(currentVersions.node);
        expect(store.hasOwnProperty('current')).toBe(true);
      });
  });

});