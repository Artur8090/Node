const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); 
});

let count = 0;

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('updateCount', count);

    socket.on('clicked', (data) => {
        console.log(data.description);
        count++; 
        io.emit('updateCount', count);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});

/*
io.on('connection',function(socket){
    console.log('A user has connected')
    setTimeout(function(){
        socket.send('Sent message 5 seconds after connection!');

    }, 4000)
    setTimeout(function(){
        socket.emit('testerEvent',{description: 'A Custom Event!'})
    }, 5000)
    socket.on('message',function(data){
        console.log(data)
    })
    socket.on('disconnect', function(){
        console.log('A User Disconnected');
    })
    socket.on('testerEvent',function(data){
        document.write(data.description)
    })
})
    */
