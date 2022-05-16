// console.log("Before condtional")
// if (1 + 1 == 2) {
//     console.log("Maths still works")
// }
// console.log("After condtional")

// let random = Math.random()
// console.log(random)
// if (random < 0.5) {
//     console.log("Yes it works")
//     console.log(random)
// }
// else {
//     console.log("it is greater than 0.5")
//     console.log(random)
// }

// const dayOfWeek = prompt('Enter a day').toLowerCase;

// if (dayOfWeek === 'monday') {
//     console.log("Ughh!! its a Monday")
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yayy!! its a Saturday")
// } else if (dayOfWeek === 'sunday') {
//     console.log("Oh yes!! its a Sunday")
// } else {
//     console.log("Meh")
// }

// 0 - 5 - Free
// 5 - 10 - Child $10
// 10 - 65 - Adult $20
// 65 + -  Senior $10

// const age = 8;

// if (age < 5) {
//     console.log("you are a baby")
// } else if (age < 10) {
//     console.log("You are a child, pay $10")
// } else {
//     console.log("You are a senior.you pay  $10")
// }

const password = prompt("Please enter a neew Password");

// Password must be 6+ characters
if (password.length >= 6) {
    if (password.indexOf('') == -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short! must be a 6+ character")
}
// Password cannot include space
