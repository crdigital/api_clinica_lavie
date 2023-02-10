const express = require('express');
const psicologoController = require('../controllers/psicologoController');
const psicologoValidator = require('../validators/psicologo');
const router = express.Router();

router.get("/", psicologoController.getAll);
router.get("/:id", psicologoValidator.getById, psicologoController.getById);
router.post("/registro", psicologoController.store);
router.put("/:id", psicologoValidator.update, psicologoController.update);
router.delete("/:id", psicologoValidator.destroy,psicologoController.destroy);
router.post("/login", psicologoController.login);


module.exports = router;