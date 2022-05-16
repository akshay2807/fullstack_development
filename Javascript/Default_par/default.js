function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(msg = "Hey there", person, punc = "!") {
    console.log(`${msg}, ${person} ${punc}`)
}