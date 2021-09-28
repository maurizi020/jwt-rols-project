import app from './app';

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    console.log('Escuchando en el puerto', port);
});
