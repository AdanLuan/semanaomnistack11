const express = require('express');
const routes = express.Router();

const IncidentController = require('./Controllers/IncidentController');
const OngController = require('./Controllers/OngController');
const ProfileContoller = require('./Controllers/ProfileController');
const SessionController =  require('./Controllers/SessionContoller');

routes.get("/incidents",IncidentController.index);
routes.post("/incidents",IncidentController.create);
routes.delete("/incidents/:id",IncidentController.delete);

routes.get("/profile",ProfileContoller.index);

routes.get("/ongs",OngController.index);
routes.post("/ongs",OngController.create);

routes.post("/sessions",SessionController.create);

module.exports = routes;