const getNodeVersion = require('./getNodeVersion.js');

describe('getNodeVersion', () => {

  const CURRENT_NODE_VERSION = '6.10.2';
  const CURRENT_NPM_VERSION = '5.5.1';

  test('Creates version store', () => {
    getNodeVersion(CURRENT_NODE_VERSION, CURRENT_NPM_VERSION)
      .then(store => {
        expect(typeof store).toBe('object');
        expect(store.node).toBe(CURRENT_NODE_VERSION);
        expect(store.hasOwnProperty('current')).toBe(true);
      });
  });

});