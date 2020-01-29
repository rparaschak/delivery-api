import express from 'express';
import bodyParser from 'body-parser';

import menuRouter from './modules/menu/router.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());

app.use(menuRouter);


app.listen(3000, () => console.log(`Example app listening on port 3000!`));