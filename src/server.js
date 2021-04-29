const express = require('express')
const server = express()
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
// const cookie = require('cookie-parser')
const { urlencoded } = require('body-parser')

/* Dotenv configuration */

require('dotenv').config({ path: path.join(__dirname, ".env")})

const PORT = process.env.PORT

/* SETTINGS */

server.set('view engine', "ejs")

server.use(express.json())
server.use(urlencoded({ extended: false }))

server.use('/', express.static(path.join(__dirname, "public")))
server.set('views', path.join(__dirname, "views"))

// Routes
const RoutesPath = path.join(__dirname, 'routes')

fs.readdir(RoutesPath, (err, files) => {
    for (let file of files) {
        const filePath = path.join(__dirname, 'routes', file)
        const route = require(filePath)
        if (route.path && route.router) {
            server.use(route.path, route.router)
        }
    }
})


// Listen to the server
server.listen(PORT, () => console.log(`Listening to ${PORT}...`))