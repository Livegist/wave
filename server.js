const express = require('express')
const cors = require('cors')
const path = require('path')

const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
