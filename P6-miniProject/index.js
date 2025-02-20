const greetModule = require('./greeting');
let ageArr = require('./age')
let fs = require('fs')
let name = fs.readFileSync('./name.txt','utf-8')

arr = name.split(',').join('').split(' ')
for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        console.log('3')
        fs.appendFileSync('hello.txt',`${greetModule.greeting(arr[i])} ${ageArr.findAge(arr[i+1])} \n`)
    }
}
