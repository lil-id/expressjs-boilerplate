const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { route } = require('../../../app2/app');

router.get('/', todoController.isRunning);
router.get('/', todoController.getTodos);

module.exports = router;
