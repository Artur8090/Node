const express = require('express');
const url = require('url');
const app = express();
const http = require('http')
http.createServer(function(request, response){

}).listen(3000)
app.get('/set-cookie',(req,res)=>{
    res.cookie('token','12345ABCDE')
    res.send('Set Cookie')
})
app.get('/get-cookie', (req, res) => {
    console.log('cookie:', req.cookies)
    res.send('Get Cookie')
})