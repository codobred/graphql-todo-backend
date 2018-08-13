import app from './app';

const { PORT = 8080, HOST = 'http://127.0.0.1' } = process.env;
app.listen(PORT, () => console.log(`Listening on ${HOST}:${PORT}`)); // eslint-disable-line no-console
