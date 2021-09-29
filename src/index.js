import DEBUG from 'debug';
import app from './app';
import './database';

const debug = DEBUG('index');

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
  debug('Escuchando en el puerto', port);
});
