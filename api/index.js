require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/getNFe', routes.NFeRoute);

const PORT = !!process.env.API_PORT ? process.env.API_PORT : 3000;
app.listen(PORT, console.log('online na porta', PORT));
