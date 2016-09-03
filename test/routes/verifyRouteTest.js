import http from 'http';
import assert from 'assert';

import config from '../../src/config';
import app from '../../src/server.js';

const port = config.port;
const serverUrl = `http://localhost:${port}`;

describe('Verify route', () => {
  const correctWord = 'apelsin';
  const incorrectWord = 'fiuhweiufhwe';

  it('should return 400 for /verify with missing param', done => {
    http.get(`${serverUrl}/verify/`, res => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });

  it(`should return correct for ${correctWord}`, done => {
    http.get(`${serverUrl}/verify/${correctWord}`, res => {

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
    http.get(`${serverUrl}/verify/${incorrectWord}`, res => {
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

