import express from 'express';

import routes from './routes';
import config from '../src/config';

const port = config.port;

const app = express();
routes(app);

app.listen(port, ()  => {
  console.log(`Speri Shecku listening on port ${port}`);
});

export default app;
