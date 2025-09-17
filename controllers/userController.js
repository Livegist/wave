const { addUser, getUser } = require('../models/userModel')

async function register(req, res) {
  const { name } = req.body
  if (!name) return res.status(400).json({ error: 'Name required' })
  const user = await addUser(name)
  res.json(user)
}

async function profile(req, res) {
  const { id } = req.params
  const user = await getUser(id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
}

module.exports = { register, profile }
