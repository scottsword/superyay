const getNpmVersion = require('./getNpmVersion.js');

describe('getNpmVersion', () => {

  test('Modifies the version store', () => {
    getNpmVersion({ foo: 'bar' })
      .then(store => {
        expect(typeof store).toBe('object');
        expect(store.hasOwnProperty('foo')).toBe(true);
        expect(store.hasOwnProperty('npm')).toBe(true);
      });
  });

});