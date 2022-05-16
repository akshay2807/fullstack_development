// const userInput = prompt("Enter something!");

// if (userInput) {
//     console.log("Truthy!")
// } else {
//     console.log("Falsy!")
// }

// if (0) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }

// const password = prompt("Enter your password")
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password");
// } else {
//     console.log("Incorect password")
// }

// const age = 11;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("Free")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid input")
// }


// const firstName = prompt("enter your first name")
// if (!firstName) {
//     firtsName = prompt("Try Again!!");
// }


// const age = 45;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or a senior")
// }

const day = 20;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("I don't know")
}