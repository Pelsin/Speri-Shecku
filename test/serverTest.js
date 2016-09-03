import http from 'http';
import assert from 'assert';

import config from '../src/config';
import app from '../src/server.js';

const port = config.port;

describe('Speri Shecku Server', () => {
  const serverUrl = `http://localhost:${port}`;

  it('should return 404 for /', done => {
    http.get(serverUrl, res => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});
