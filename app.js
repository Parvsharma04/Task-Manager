const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 3000

app.use(express.json())
app.use('/api/v1/tasks', tasks)

app.listen(port, console.log(`listening on port ${port}!`))