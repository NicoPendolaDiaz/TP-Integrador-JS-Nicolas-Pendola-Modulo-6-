const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * @route   GET /
 * @desc    Página principal de bienvenida (HTML)
 * @access  Público
 */
router.get('/', mainController.getHome);

module.exports = router;
