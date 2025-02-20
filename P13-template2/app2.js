
const express = require('express');
const app = express();
let movies =['a','b','c','d']
app.set("view engine","ejs")
app.get("/", function(req, res){
    res.render("index",{ 
        a : 5,
        b : 2,
        movies : movies,
        
    })
});
app.listen(3000)