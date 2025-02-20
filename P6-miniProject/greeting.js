let date = new Date();
function greeting(name){
if(date.getHours() < 12){
  return 'Доброе утро ' + name
} else if(date.getHours() > 12 && date.getHours() < 17){
    return 'Добрый день ' + name
} else if(date.getHours() > 17){
  return 'Добрый вечер ' + name
}
}

module.exports = {greeting}