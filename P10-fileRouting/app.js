const http = require("http");
const fs = require("fs");
/*
http.createServer(function(request, response){
    const filePath = request.url.substr(1);
    fs.readFile("public/" + filePath, function(error, data){         
        if(error){  
            fs.readFile("public/404.html", function(error, data){
                if(error) throw error;

                response.statusCode = 404;
                response.end(data);
            })          
        }  
        else{
            response.statusCode = 200;
            response.end(data);
        }
    });
}).listen(3000);

http.createServer(function(request,response){
    const filePath = request.url;
    fs.readFile(filePath, function(error, data){         
        if(error){  
            fs.readFile("random.html", function(error, data){
                if (error) throw error;
                response.statusCode = 404;
                response.end(data);
            })          
        }  
        else{
            response.statusCode = 200;
            response.end(data);
        }
    });

}).listen(3000)
*/
http.createServer(function (request, response) {
    const filePath = request.url.substr(1);
    console.log(filePath)
    if (filePath == 'page1.html') {
        console.log('works')
        fs.readFile('page1.html', function (error, data) {
            if (error) throw error;
            response.statusCode = 200;
            response.end(data);
        })

    } else if (filePath == 'page2.html') {
        fs.readFile('page2.html', function (error, data) {
            if (error) throw error;
            response.statusCode = 404;
            response.end(data);
        })
    } else {
        fs.readFile('404.html', function (error, data) {
            if (error) throw error;
            response.statusCode = 404;
            response.end(data);
        })
    }
}).listen(3000)