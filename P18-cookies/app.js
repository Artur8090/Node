/*
const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const app = express();

app.use(cookieParser());

const oneYear = 365 * 24 * 60 * 60; // seconds in a year

// Set a cookie
app.get('/example/set-cookie', (req, res) => {
    res.cookie('token', '12345ABCDE', {
        path: '/example/',
        domain: 'example.com',
        maxAge: oneYear * 1000 // in milliseconds
    });
    res.send('Cookie has been set! Go to /example/get-cookie to see it.');
});

// Display cookies on the webpage
app.get('/example/get-cookie', (req, res) => {
    res.send(`Cookies: ${JSON.stringify(req.cookies)}`);
});

http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensures views directory is correctly set

// Render form or welcome message
app.get('/', (req, res) => {
    const { name, email } = req.cookies;
    res.render('index', { name, email });
});

// Handle form submission and set cookies
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.cookie('name', name, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year
    res.cookie('email', email, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year
    res.redirect('/');
});

http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const app = express();

app.use(cookieParser());

// Handle page request
app.get('/', (req, res) => {
    const firstVisitTime = req.cookies.firstVisitTime;
    let elapsedTime = null;

    if (firstVisitTime) {
        const timeDiff = Date.now() - firstVisitTime; // Time in milliseconds
        elapsedTime = (timeDiff / 1000).toFixed(2); // Time in seconds
    } else {
        res.cookie('firstVisitTime', Date.now(), { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year
    }

    res.send(`<h1>${elapsedTime ? `Time since first visit: ${elapsedTime} sec` : 'Welcome!'}</h1>`);
});

http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
*/
const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {

    let visitCount = parseInt(req.cookies.visitCount) || 0;
    visitCount++;
    res.cookie('visitCount', visitCount, { maxAge: 365 * 24 * 60 * 60 * 1000 }); 
    res.send(`<h1>You have visited this site ${visitCount}</h1>`);
});

http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
