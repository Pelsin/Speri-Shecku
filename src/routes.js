import verify from './routes/verifyRoute';
import suggest from './routes/suggestRoute';

const routes = (app) => {
  app.get('/verify/:text', verify);
  app.get('/suggest/:text', suggest);
};

export default routes;
