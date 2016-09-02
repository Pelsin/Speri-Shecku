import http from 'http';
import assert from 'assert';

import app from '../src/server.js';

describe('SperiShecku Server', () => {
  const serverUrl = 'http://localhost:1234';

  it('should return 404 for /', done => {
    http.get(serverUrl, res => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });

  it('should return 400 for /check with missing param', done => {
    http.get(`${serverUrl}/check/`, res => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });

  it('should return 400 for /suggest with missing param', done => {
    http.get(`${serverUrl}/suggest/`, res => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });

  describe('Check', () => {
    const correctWord = 'apelsin';
    const incorrectWord = 'fiuhweiufhwe';

    it(`should return 200 for ${correctWord}`, done => {
      http.get(`${serverUrl}/check/${correctWord}`, res => {

        res.on('data', (body) => {
          const responseBody = JSON.parse(body);
          assert.equal(res.statusCode, 200);
          assert.deepEqual(responseBody, {
            correct: true,
            word: correctWord
          });
          done();
        });
      });
    });

    it(`should return incorrect for ${incorrectWord}`, done => {
      http.get(`${serverUrl}/check/${incorrectWord}`, res => {
        res.on('data', (body) => {
          const responseBody = JSON.parse(body);
          assert.deepEqual(responseBody, {
            correct: false,
            word: incorrectWord
          });
          done();
        });
      });
    });
  });

  describe('Suggest', () => {
    const misspelledWord = 'pelsin';

    it(`should return suggestions for typo ${misspelledWord}`, done => {
      http.get(`${serverUrl}/suggest/${misspelledWord}`, res => {
        res.on('data', (body) => {
          const responseBody = JSON.parse(body);
          assert.deepEqual(responseBody, {
            correct: false,
            suggestions: [
              "apelsin",
              "spelsinne",
              "singelspel",
              "inspel"
            ],
            word: misspelledWord
          });
          done();
        });
      });
    });
  });
});
