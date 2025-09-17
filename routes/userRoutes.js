const express = require('express')
const { register, profile } = require('../controllers/userController')

const router = express.Router()
router.post('/register', register)
router.get('/:id', profile)

module.exports = router
