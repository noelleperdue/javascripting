var numberOfRolls = Number(process.argv[2]);

function randomRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

for (var i = 0; i < numberOfRolls; i++) {
    console.log(randomRoll());
}

