const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTask = async (req, res) => {
  const { id } = req.params; 
  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) }, 
    });

    if (!task) {
      return res.status(404).json({ error: 'task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const createTask = async (req, res) => {
  const { title, color } = req.body;

  if (!title || !color) {
    return res.status(400).json({ error: 'Title and color required' });
  }

  try {
    const newTask = await prisma.task.create({
      data: { title, color },
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error('error creating task:', error);
    res.status(500).json({ error: 'internal server error' });
  }
};


const updateTaskCompleted = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'completed must be a boolean' });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { completed },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('error updating task:', error);
    res.status(500).json({ error: 'internal server error' });
  }
};

const updateTaskTitle = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
  
    if (typeof title !== 'string') {
      return res.status(400).json({ error: 'title must be a string' });
    }
  
    try {
      const updatedTask = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title },
      });
  
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('error in updating task title:', error);
      res.status(500).json({ error: 'internal server error' });
    }
  };
  

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end(); 
  } catch (error) {
    console.error('error deleting task:', error);
    res.status(500).json({ error: 'internal server error' });
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTaskCompleted,
  updateTaskTitle,
  deleteTask,
};
