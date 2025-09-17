const { addTask, getTasks, completeTask } = require('../models/taskModel')

async function list(req, res) {
  const tasks = await getTasks()
  res.json(tasks)
}

async function create(req, res) {
  const { title } = req.body
  if (!title) return res.status(400).json({ error: 'Title required' })
  const task = await addTask(title)
  res.json(task)
}

async function complete(req, res) {
  const { id } = req.params
  const task = await completeTask(id)
  if (!task) return res.status(404).json({ error: 'Task not found' })
  res.json(task)
}

module.exports = { list, create, complete }
