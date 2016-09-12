import http from 'http';
import assert from 'assert';

import config from '../src/server/config';

const port = config.port;

describe('Speri Shecku Server', () => {
  const serverUrl = `http://localhost:${port}`;

  it('should return 200 for /', done => {
    http.get(serverUrl, res => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});
