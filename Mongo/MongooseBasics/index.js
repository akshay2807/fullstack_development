const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log("Oh no error!!!!!!!!")
        console.log(err)
    })


// {
//     title: "Amadeus",
//         year: 1986,
//             score: 9.2,
//                 rating: 'R'
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});


const Movie = mongoose.model('Movie', movieSchema); //after this line mongoose will change Movie to movies(collection) & create a model(Movie)
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })

//to find movie
//Movie.findById({ _id: "628c5bfac5f692358ff7441a" }).then(e => console.log(e))

//to update
//db.movies.movies.find({ title: 'Amadeus' }).then(e => console.log(e))// done at mongo terminal

//Movie.updateOne({ title: 'Amadeus' }, { year: 1984 }).then(res => console.log(res))

//Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 }).then(res => console.log(res))