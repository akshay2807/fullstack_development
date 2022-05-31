const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("Mongo Connection open")
    })
    .catch(err => {
        console.log("Oh no Mongo connection error!!!!!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//to check whether it is working or not
// app.get('/dog', (req, res) => {
//     res.send('WOOF!!')
// })

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    //console.log(products)
    //res.send('All products will be here')
    res.render('products/index', { products }) //ejs file will be shown at this step
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    //console.log(newProduct)
    //console.log(req.body)
    //res.send('making your product!')
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    //res.send('details page!!')
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`)
    // console.log(req.body);
    // res.send('PUT!!');
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})