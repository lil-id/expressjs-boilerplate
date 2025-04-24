require('dotenv').config();
const express = require('express');
const app = express();
const todoRoutes = require('./src/routes/todoRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

app.use(express.json());
app.use('/', todoRoutes);
app.use('/todos', todoRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 9002;
app.listen(PORT, () => {
  console.log(`App 1 running on http://localhost:${PORT}`);
});

module.exports = app;
