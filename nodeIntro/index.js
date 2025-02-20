const os = require("os");
const greeting = require("./myOwnModules/lib/greeting");
const date = require('./dateLib/date')
console.log(`Дата запроса: ${date.currentDate}`);


let userName = os.userInfo().username;
console.log(greeting.getMessage(userName,date.currentDate))