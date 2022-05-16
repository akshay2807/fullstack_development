// const myMath = {
//     PI: 3.142,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }
//can be written as:
// const myMath = {
//     PI: 3.142,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }
//console.log(myMath.square(2)); //4
// myMath.cube(2)//8
// myMath["cube"](2)//8

//THIS keyword
// const cat = {
//     name: 'Blue star',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log(this.color)
//         console.log(`${this.name} says meowww `)
//     }
// }
// const meow2 = cat.meow;

//Try-catch
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR")
// }

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log(e);
//         console.log("Please pass a string value")
//     }
// }


//For-Each
// const movies = [
//     {
//         title: 'KGF',
//         score: 99
//     },
//     {
//         title: 'Drama',
//         score: 80
//     },
//     {
//         title: 'Paramatma',
//         score: 100
//     },
//     {
//         title: 'MM',
//         score: 97
//     }
// ]
// movies.forEach(function (movies) {
//     console.log(movies)
//     console.log(`${movies.title} - ${movies.score}/100`)
// })

//MAP
// const numbers = [1, 2, 3, 4, 5, 6, 7]
// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

const movies = [
    {
        title: 'KGF',
        score: 99
    },
    {
        title: 'Drama',
        score: 80
    },
    {
        title: 'Paramatma',
        score: 100
    },
    {
        title: 'MM',
        score: 97
    }
]
const titles = movies.map(function (movies) {
    return movies.title.toUpperCase();
})
