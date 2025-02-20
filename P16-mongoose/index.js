const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', userScheme)
const user = new User({
    name: 'Andrey',
    age: 25
})
/*
mongoose.connect('mongodb://localhost:27017/usersdb',{useUnifiedTopology: true, useNewUrlParser: true})
user.save()
.then(function(doc){
    console.log('Saved obj', doc);
    mongoose.disconnect()
})  
.catch(function(err){
    console.log(err)
    mongoose.disconnect()
    })
*/
mongoose.connect('mongodb://localhost:27017/animalsdb',{useUnifiedTopology: true, useNewUrlParser: true})
    const animalScheme = new Schema({
    name: String,
    type: String,
    food: String,
    location: String
})
const Animal = mongoose.model('Animal', animalScheme)
const elephant = new Animal({
    name: 'Elephant',
    type: 'Mammal',
    food: 'Plants',
    location: 'Warm and humid areas'
})
elephant.save();
const lion = new Animal({
    name: 'Lion',
    type: 'Mammal',
    food: 'Meat',
    location: 'Warm areas'
})
lion.save()
const monkey = new Animal({
    name: 'Monkey',
    type: 'Mammal',
    food: 'Plants',
    location: 'Warm and humid areas'
})
monkey.save()