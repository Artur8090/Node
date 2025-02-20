const http = require('http');
const url = require('url');

http.createServer(function (request, response) {

    if (request.url == "/") {
        response.setHeader("Location", "/hobby");
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write(`<h2>Это мои хобби</h2>
                <p>Играть</p>
                <p>Спать</p>
                <p>Програмировать</p>`)
    } else if (request.url == '/hobby/gaming') {
        console.log('yes')
        response.end()
    } else if (request.url == '/hobby/sleeping') {
        console.log('yeps')
        response.end()
    } else if (request.url == '/hobby/proggraming') {
        console.log('yess')
        response.end()
    } 
    response.statusCode = 404;
    response.end()
    
}).listen(3000)
