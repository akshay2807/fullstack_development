const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers.filter(n => {
    return n < 6
})

const movies = [
    {
        title: 'KGF',
        score: 96,
        year: 2022
    },
    {
        title: 'Drama',
        score: 80,
        year: 2014
    },
    {
        title: 'Paramatma',
        score: 100,
        year: 2012
    },
    {
        title: 'MM',
        score: 97,
        year: 2006
    }
]
const goodMovies = movies.filter(movies =>
    movies.score > 90)
const goodTitles = goodMovies.map(movies => movies.title)

const goodTitles1 = movies.filter(m => m.score > 80).map(m => m.title);
const badMovies = movies.filter(movies =>
    movies.score < 90)
const recentMovies = movies.filter(movies =>
    movies.year > 2011)