const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

/**
 * @route   GET /status
 * @desc    Informa el estado operacional del servidor (JSON)
 * @access  Público
 */
router.get('/', healthController.getStatus);

module.exports = router;
