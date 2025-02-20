const express = require('express');
const url = require('url');
const app = express();
app.get('/',function(request,response){
    response.send('<h2>Привет, express!</h2>')
});
app.get('/about',function(request,response){
    response.send('<p>Это мой первый проект на express!</p>')
})
app.use('/datetime',function(request, response){
    const date = new Date();
    console.log(date)
    response.send(`<p>Дата:${date.getDate()}:${date.getMonth()}:${date.getFullYear()}, Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}<p>`)

})
app.listen(3000)