const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand2')
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

const categories = ['fruit', 'vegetable', 'dairy']

//to check whether it is working or not
// app.get('/dog', (req, res) => {
//     res.send('WOOF!!')
// })

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}


app.get('/products', async (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category })
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({ category })
            res.render('products/index', { products, category: 'All' })
        }
    } catch (e) {
        next(e)
    }
    //const products = await Product.find({})
    //console.log(products)
    //res.send('All products will be here')
    //res.render('products/index', { products }) //ejs file will be shown at this step
})

app.get('/products/new', (req, res) => {
    //throw new AppError('Not Allowed', 401) just for sake of checking
    res.render('products/new', { categories })
})

app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        //console.log(newProduct)
        //console.log(req.body)
        //res.send('making your product!')
        res.redirect(`/products/${newProduct._id}`);
    } catch (e) {
        next(e);
    }
})



app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    if (!product) {
        throw next(new AppError('Product Not found', 404));
    }
    //res.send('details page!!')
    res.render('products/show', { product })
}))

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw next(new AppError('Product Not found', 404));
        }
        res.render('products/edit', { product, categories })
    } catch (e) {
        next(e);
    }
})

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        res.redirect(`/products/${product._id}`)
    } catch (e) {
        next(e);
    }
    // console.log(req.body);
    // res.send('PUT!!');
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

app.use((err, req, res, next) => {
    console.log(err.name);
    next(err);
})

const handleValidationErr = err => {
    console.log(err);
    //return err;
    return new AppError(`Validation Failed... ${err.message}, 400`)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})