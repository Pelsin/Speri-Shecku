import http from 'http';
import assert from 'assert';

import config from '../../src/config';
import app from '../../src/server.js';

const port = config.port;
const serverUrl = `http://localhost:${port}`;

describe('Suggest route', () => {
  const misspelledWord = 'pelsin';

  it('should return 400 for /suggest with missing param', done => {
    http.get(`${serverUrl}/suggest/`, res => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });

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
