const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log("Mongo Connection open")
    })
    .catch(err => {
        console.log("Oh no Mongo connection error!!!!!!!!")
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Garpefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     }) one method of using or we can do insertMany

const seedProduct = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Godess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Waterelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProduct)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })