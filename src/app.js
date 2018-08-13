import express from 'express';
import cors from 'cors';
import { Server } from 'http';

import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';
import createGraphqServer from './graphql/server';

const app = express();
const http = Server(app);

app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test',
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

// GraphQL server
createGraphqServer(app);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).render('error', {
    message: err.message,
  });
});

export default http;
