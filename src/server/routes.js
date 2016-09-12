import express from 'express';
import path from 'path';

import verify from './routes/verifyRoute';
import suggest from './routes/suggestRoute';

const routes = (app) => {
  // Api endpoints
  app.get('/api/verify/:text', verify);
  app.get('/api/suggest/:text', suggest);

  // Client-side
  app.use('/', express.static(path.join(__dirname, '../../public')));
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public', 'index.html')));
};

export default routes;
