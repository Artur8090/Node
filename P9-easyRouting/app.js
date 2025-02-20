const http = require('http');

http.createServer((req, res) => {
    // Set the default content type to UTF-8
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.url === '/page1/') {
        res.statusCode = 200; // Set status code to 200
        res.end('первая страница');
    } else if (req.url === '/page2/') {
        res.statusCode = 200; // Set status code to 200
        res.end('вторая страница');
    } else if (req.url === '/page3/') {
        res.statusCode = 200; // Set status code to 200
        res.end('третья страница');
    } else {
        res.statusCode = 404; // Set status code to 404
        res.end('страница не найдена');
    }
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
