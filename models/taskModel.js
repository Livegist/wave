const db = require('../utils/db')

async function addTask(title) {
  await db.read()
  const task = { id: Date.now(), title, completed: false }
  db.data.tasks.push(task)
  await db.write()
  return task
}

async function getTasks() {
  await db.read()
  return db.data.tasks
}

async function completeTask(id) {
  await db.read()
  const task = db.data.tasks.find(t => t.id == id)
  if (task) task.completed = true
  await db.write()
  return task
}

module.exports = { addTask, getTasks, completeTask }
