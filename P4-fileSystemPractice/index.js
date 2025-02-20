const { dir } = require('node:console');
const fs = require('node:fs')
const path = require('path');
const directory = path.join(__dirname,'files');
let files = fs.readdirSync('./files')
/*
fs.rename("hello.txt", "async operation.txt", function(error){
    if(error) {console.log(error)} // если возникла ошибка
});

 
fs.renameSync("hello.txt", "sync operation.txt")

let fileContent;
   
   fs.readFile('hello.txt', 'utf-8',(err, data) => {
     if(err) throw(err);
     fileContent = data;
     console.log(fileContent)
   });

   //
fs.appendFileSync('hello.txt','End file');
console.log(fs.readFileSync('hello.txt','utf-8'));
fs.unlinkSync('hello.txt')
*/

fs.writeFileSync(directory+"/file1.txt","hello");
fs.writeFileSync(directory+"/file2.txt","no");
fs.writeFileSync(directory+"/file3.txt","yes");
for(let i = 0; i < files.length; i++){
    console.log(fs.readFileSync(directory + '/' + files[i],'utf-8'))
}
