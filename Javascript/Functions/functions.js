// const add = function (x, y) {
//     return x + y;
// }

//Higher Order Functions
// function callTwice(func) {
//     func();
//     func();
// }
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie)

//Returning a function
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.50) {
//         return function () {
//             console.log("Congrats")
//             console.log("You've won")
//         }
//     } else {
//         return function () {
//             alert("there's a virus in your computer")
//             alert("Stop trying... & close this window")
//         }
//     }
// }
// const mystery = makeMysteryFunc()


//Returning functions
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const range = function (num) {
    return num >= 100 && num <= 200
}

const isChild = makeBetweenFunc(0, 18)
isChild(40)//false

const isAdult = makeBetweenFunc(19, 64)

const isSenior = makeBetweenFunc(65, 120)

//makeBetweenFunc(100, 200)

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }