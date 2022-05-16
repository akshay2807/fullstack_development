const testScores = {
    keenan: 80,
    damon: 75,
    kin: 89,
    shawn: 91,
    marlon: 72,
    nadia: 80,
    elvira: 79,
    diedre: 85,
    vonnie: 65,
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)