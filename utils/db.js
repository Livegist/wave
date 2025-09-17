const { Low } = require('lowdb')
const { JSONFile } = require('lowdb/node')
const path = require('path')

const file = path.join(__dirname, '../database.json')
const adapter = new JSONFile(file)
const db = new Low(adapter, { users: [], tasks: [] })

async function initDB() {
  await db.read()
  if (!db.data.users) db.data.users = []
  if (!db.data.tasks) db.data.tasks = []
  await db.write()
}

initDB()

module.exports = db
