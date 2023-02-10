const express = require('express');
const atendimentoControler = require('../controllers/atendimentoController');
const atendimentoValidator = require('../validators/atendimentos');

const router = express.Router();

router.get('/', atendimentoControler.getAll);
router.get('/:id', atendimentoValidator.getById,atendimentoControler.getById);
router.post('/', atendimentoValidator.store,atendimentoControler.store)

module.exports = router;