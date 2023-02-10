const express = require('express');
const pacienteController = require('../controllers/pacienteController');
const pacienteValidator = require('../validators/paciente');

const router = express.Router();

router.get("/", pacienteController.getAll);
router.get("/:id", pacienteValidator.getById,pacienteController.getById);
router.post("/", pacienteValidator.store,pacienteController.store);
router.put("/:id", pacienteValidator.update,pacienteController.update);
router.delete("/:id", pacienteValidator.destroy,pacienteController.destroy);

module.exports = router;