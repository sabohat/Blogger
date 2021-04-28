const express = require('express')
const path = require('path')

// Dotenv configuration
require('dotenv').config()

const PORT = process.env.PORT

// Create server
const app = express()

// Lister to the server
app.listen(PORT, () => console.log(`Listening to ${PORT}...`))