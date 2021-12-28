const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect database
connectDB();

app.get("/", (req, res) => res.send("Hello World!"))

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server running on port ${port}`))