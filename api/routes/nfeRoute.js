const express = require('express');
const route = express.Router();
const NFeController = require('../controllers/nfeController');

route.get('/', NFeController.read);

module.exports = route;