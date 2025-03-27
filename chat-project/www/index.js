let express = require('express')
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io')

server.listen(3000);

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

users = [];
connections = []