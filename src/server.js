import express from 'express';
import routes from './routes';

const app = express();
routes(app);

app.listen(1234, function () {
  console.log('Speri Shecku listening on port 1234!');
});

export default app;
