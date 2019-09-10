const {compare, startSymbol, endSymbol} = require('./diff');

sampleLocal = [
  '0',
  '1',
  '2',
  startSymbol,
  '---',
  '---',
  endSymbol,
  '-2',
  '-1',
];

sampleRemote = [
  '+++',
  '+++',
  '+++',
];

sampleResults = [
  '0',
  '1',
  '2',
  startSymbol,
  '+++',
  '+++',
  '+++',
  endSymbol,
  '-2',
  '-1',
];

const assert = require('assert');
describe('testing the compare function', () => {
  describe('these should be equal ', () => {
    it('should be equal', () => {
      const results = compare(sampleLocal, sampleRemote);
      assert.deepEqual(results, sampleResults);
    });
  });
});
