var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});


app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});


var connections = [];


io.on('connection', function(socket) { 
    console.log("Успешное соединение");
    connections.push(socket);
    socket.on('disconnect', function() {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились");
    });
    socket.on('send mess', function(data) {
        io.emit('add mess', {mess: data.mess, name: data.name, className: data.className});
    });
});
