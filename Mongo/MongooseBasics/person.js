const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log("Oh no error!!!!!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = 'Yo';
    this.last = 'MAMA';
    console.log("About to save!!!!")
})
personSchema.post('save', async function () {
    console.log("Just saved!!!!")
})

const Person = mongoose.model('Person', personSchema);

//1st call
//const tammy = new Person({first:'Tammy', last:'Chow'}
//call tammy.fullName we'll get the result
//after using Tammy.save() its gets stored to mongodb untill then it won't be saved

