const db = require('../utils/db')

async function addUser(name) {
  await db.read()
  const user = { id: Date.now(), name, points: 0 }
  db.data.users.push(user)
  await db.write()
  return user
}

async function getUser(id) {
  await db.read()
  return db.data.users.find(u => u.id == id)
}

module.exports = { addUser, getUser }
