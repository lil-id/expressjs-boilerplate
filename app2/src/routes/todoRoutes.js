const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.isRunning);
router.get('/', todoController.getTodos);

module.exports = router;
