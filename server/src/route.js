// Route files
import { people } from './routes';
exports.setRouter = (app) => {
  // Mount routers
  app.use('/people', people);
};
