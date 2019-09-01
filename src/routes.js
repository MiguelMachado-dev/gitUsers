import { Router } from 'express';
import SearchController from './app/controllers/SearchController';

const routes = new Router();

routes.get('/health', (req, res) => {
  return res.status(200).json({
    ok: 'Server is online!',
  });
});
routes.get('/users', SearchController.getUser);

export default routes;
