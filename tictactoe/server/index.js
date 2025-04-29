const http = require('http')
const express = require('express')
const socketIo = require('socket.io')
const fs = require('fs')

const app = express();
const server = http.Server(app).listen(8080);
const io = socketIo(server);

app.use(express.static(__dirname + '/../client/'))

let players = {};
let unmatchedPlayerId;

io.on('connection', function (socket){
    console.log('New client connected. ID:', socket.id);


    joinPlayer(socket)
    socket.on('make.move', function(data){
        console.log(data)
    })
})

function joinPlayer(socket){
    players[socket.id] = {
        opponent: unmatchedPlayerId,
        symbol: "X",
        socket: socket,
    }
    if(unmatchedPlayerId){
        players[socket.id].symbol = 'O'
        players[unmatchedPlayerId].opponent = socket.id
        unmatchedPlayerId = null
    } else{
        unmatchedPlayerId = socket.id
    }
}

function getOpponentSocket(socket){
    if(!players[socket.id].opponent){
        return
    }
    
}