const fs = require('fs');
const example = __dirname + '/input.txt';
const rawData = fs.readFileSync(example, 'utf8');

let calories = rawData.split('\n\n').map(function(elfsCalories) {
    return elfsCalories.split('\n');
})

// PART 1
const part1Answer = findGreatestCaloricSum(calories);

function findGreatestCaloricSum(allCalories) {
    let greatestCaloricSum = 0;
    for (elfsCalories of allCalories) {
        const caloricSum = elfsCalories.reduce((sum, a) => sum + Number(a), 0);
        if(caloricSum > greatestCaloricSum) greatestCaloricSum = caloricSum;
    }
    return greatestCaloricSum;
}


// PART 2
const part2Answer = findTop3GreatestCaloricSum(calories);

function findTop3GreatestCaloricSum(allCalories) {
    const descendingGreatestCalories = allCalories.map(function(elfsCals) {
        return elfsCals.reduce((partialSum, a) => partialSum + Number(a), 0)
    }).sort(function(a, b) {
        return Number(b) - Number(a);
    })
    return (
      descendingGreatestCalories[0] +
      descendingGreatestCalories[1] +
      descendingGreatestCalories[2]
    );
}

console.log(part1Answer)
console.log(part2Answer)