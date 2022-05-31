const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');
const Apperror = require('./AppError')

app.use(morgan('tiny'))

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!!')
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('password required', 401);
    // res.send('Sorry you need a password')
    //res.status(401)
    //throw new Error('Password required!!')
    throw new AppError(401, 'Password required')
})

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home page')
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof!!!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is defined')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin')
})

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use((req, res) => {
    res.status(404).send('Not found')
})

// app.use((err, req, res, next) => {
//     console.log('***********')
//     console.log('****Error****')
//     console.log('***********')
//     console.log(err)
//     next(err)
//     //res.status(500).send("Oh noo!!! It's an error!!!")
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})