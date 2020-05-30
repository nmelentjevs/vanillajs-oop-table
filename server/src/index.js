import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { setRouter } from './route';
import logger from './middleware/logger';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger);
setRouter(app);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

export default app;
