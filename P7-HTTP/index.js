const http = require('http');
/*
http.createServer(function(request, response){
    response.write(request.url);
    response.end();
}).listen(3000)
*/
http.createServer(function(request, response){
    response.setHeader('age', 17);
    response.setHeader('country', 'norway')
    response.setHeader('name', 'Artur')
    response.end();
}).listen(3000)