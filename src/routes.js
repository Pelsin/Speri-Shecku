import check from './routes/check';

const routes = (app) => {
  app.get('/check/:word', check.isCorrect);
  app.get('/suggest/:word', check.suggest);
};

export default routes;
