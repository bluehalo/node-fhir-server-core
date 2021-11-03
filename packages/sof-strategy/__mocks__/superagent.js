'use strict';

const superagent = {};

function stub(agent) {
  return jest.fn(() => agent);
}

function __reset() {
  superagent.__mockError = undefined;
  superagent.__mockResults = undefined;
}

function __setError(errorMsg) {
  superagent.__mockError = new Error(errorMsg);
}

function __setResults(results) {
  superagent.__mockResults = results;
}

superagent.set = stub(superagent);
superagent.post = stub(superagent);
// superagent.then = stub(superagent);
// superagent.catch = stub(superagent);
// Stub the send request module
superagent.send = jest.fn(
  () =>
    new Promise((resolve, reject) => {
      if (superagent.__mockError) {
        reject(superagent.__mockError);
      } else {
        resolve(superagent.__mockResults);
      }
    })
);

superagent.__reset = __reset;
superagent.__setError = __setError;
superagent.__setResults = __setResults;

module.exports = superagent;
