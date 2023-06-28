const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '../node_modules/socket.io/client-dist')))

io.on('connection', (socket) => {
    console.log('a user connected')    
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chat message', msg => {
        console.log('message: ' + msg)
        io.emit('chat message', msg)
    })
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`listening on: ${PORT}`)
})
