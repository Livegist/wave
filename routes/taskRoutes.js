const express = require('express')
const { list, create, complete } = require('../controllers/taskController')

const router = express.Router()
router.get('/', list)
router.post('/', create)
router.post('/:id/complete', complete)

module.exports = router
