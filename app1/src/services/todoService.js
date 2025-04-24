const prisma = require('../configs/prisma');

exports.getAllTodos = async () => {
  return await prisma.todo1.findMany();
};
