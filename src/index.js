import app from './app';

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Escuchando en el puerto', port);
});
