const path = require('path')
const express = require('express')
require('colors')
require('dotenv').config()
const uuid = require('uuid')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))



/////Email sending//////



app.listen(PORT, () => console.log(`Server started on port ${PORT}`))



