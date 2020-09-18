const {mergeLocalAndRemote, startSymbol, endSymbol} = require('./diff');

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
describe('testing the mergeLocalAndRemote function', () => {
  describe('these should be equal ', () => {
    it('should be equal', () => {
      const results = mergeLocalAndRemote(sampleLocal, sampleRemote);
      assert.deepEqual(results, sampleResults);
    });
  });
});
