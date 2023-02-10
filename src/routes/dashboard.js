const express = require('express');
const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

router.get('/numero-pacientes' , dashboardController.numPacientes);
router.get('/numero-psicologos' , dashboardController.numPsicologos);
router.get('/numero-atendimentos' , dashboardController.numAtendimentos);
router.get('/media-atendimento-psicologos' , dashboardController.mediaAtendimentoPsicologo);


module.exports = router;