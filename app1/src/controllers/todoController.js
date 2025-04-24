const todoService = require('../services/todoService');

exports.isRunning = (req, res) => {
  res.json({ message: 'App 1 is running' });
};

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};
