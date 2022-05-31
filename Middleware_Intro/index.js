const express = require('express');
const app = express();
const morgan = require('morgan');

//app.use(morgan('tiny'))
//app.use(morgan('dev '))

app.use(morgan('tiny'))

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!!')
    next();
})

// app.use((req, res, next) => {
//     const { password } = req.query;
//     if (password === 'chickennugget') {
//         next();
//     }
//     res.send('Sorry you need a password')
//     //console.log(req.query);
//     next();
// })

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry you need a password')
    next();
})


// app.use((req, res, next) => {
//     console.log("This is my first middleware")
//     return next();
//     console.log('This is my first middleware-after calling next()')
// })

// app.use((req, res, next) => {
//     console.log("This is my second middleware")
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("This is my third middleware")
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home page')
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof!!!')
})

app.get('/secret', verifyPassword, (req, res) => {
    // console.log(`Request date: ${req.requestTime}`)
    res.send('My secret is defined')
})

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use((req, res) => {
    //res.send('Not found')// can also be called in the below way
    res.status(404).send('Not found')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})