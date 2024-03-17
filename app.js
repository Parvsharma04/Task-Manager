const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./DB/connect')
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>console.log(`http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()