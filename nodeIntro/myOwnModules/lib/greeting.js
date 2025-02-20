module.exports.getMessage = (name, date) => {
    let hour = date.getHours();
    if(hour >= 18 && hour < 24){
        return "Добрый вечер, " + name;
    } else if( hour >= 12 && hour < 18){
        return "Добрый день, " + name;
    } else if(hour >= 5 && hour < 12){
        return "Доброе утро, " + name;
    }
}