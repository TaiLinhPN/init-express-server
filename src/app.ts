import express from 'express';
import logger, { expressLogger } from './logger';

const app = express();
app.use(expressLogger);

const port = 3000;

app.get('/', (req, res) => {
  res.send('May be i love you <3');
});

app.listen(port, () => {
    console.log("love u");
  return console.log(`Express is listening at http://localhost:${port}`);
});