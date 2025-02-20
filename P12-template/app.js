
const express = require('express');
const app = express();

app.set("view engine","ejs")
function get_multiplications(...args){
    let prod = 1; 
    args.forEach((n)=>{prod *= n});
    return prod;
}
app.get("/", function(req, res){
    const randomNum = Math.ceil(Math.random()*5+1)
    res.render("index",{ 
        num : randomNum,
        a : 5,
        b : 2,
        get_multiplications : get_multiplications,
    })

});
app.listen(3000)