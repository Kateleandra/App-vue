const express = require('express');
const routes = express.Router();

const OccupationsController = require('./controllers/OccupationsControllers');

routes.get("/occupations", OccupationsController.index);
routes.post("/occupations", OccupationsController.store);

module.exports = routes;