const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/animalsdb',{useUnifiedTopology: true, useNewUrlParser: true})
    const animalScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    food: Array,
    location: Array,
    description: {
        type: String,
        min: 20
    }
})
const Animal = mongoose.model('Animal', animalScheme)
const crocodile = new Animal({
    name: 'crocodile',
    food: ['meat','More meat', 'More meat'],
    location: ['africa','south america'],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus itaque vero architecto corporis quam quis eum impedit. Nobis, id ipsam!'
})
crocodile.save().then(() => {
    Animal.updateOne({ name: 'crocodile' }, { $set: { name: 'Croc' } }).then(() => {
        Animal.findOne({ name: 'Croc' }).then(animal => {
            console.log(animal);
        });
    });

    Animal.updateOne({ name: 'crocodile' }, { $push: { food: 'fish' } });

    Animal.findOneAndUpdate({ name: 'crocodile' }, { $set: { location: ['Asia'] } });

    Animal.deleteOne({ name: 'crocodile' });
});