// let radius = 8;
// if (radius > 0) {
//     const pi = 3.142
//     let msg = 'Hiiii'
// }
// console.log(radius)
// console.log(pi) //Not defined bcoz radius is not a function it is a condition

// for (let i = 0; i < 5; i++) {
//     let msg = "Hello"
//     console.log(msg)
// }
// console.log(msg)//This will not get executed


// Lexical Scope
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black panther', 'BatMan']
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();//bankRobbery(); if thies is called it gets executed
}