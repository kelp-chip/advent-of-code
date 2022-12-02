const fs = require('fs');
const example = __dirname + '/input.txt';
const rawData = fs.readFileSync(example, 'utf8');

let calories = rawData.split('\n\n').map(function(elfCals) {
    return elfCals.split('\n');
})

// PART 1
const part1Ans = findGreatestCalorieSum(calories);

function findGreatestCalorieSum(allCals) {
    let topCalories = 0;
    for (elfsCals of allCals) {
        const calSum = elfsCals.reduce((sum, a) => sum + Number(a), 0);
        if(calSum > topCalories) topCalories = calSum;
    }
    return topCalories;
}


// PART 2
const part2Ans = findTop3GreatestCalorieSum(calories);

function findTop3GreatestCalorieSum(allCalories) {
    const descendingGreatestCals = allCalories.map(function(elfsCals) {
        return elfsCals.reduce((partialSum, a) => partialSum + Number(a), 0)
    }).sort(function(a, b) {
        return Number(b) - Number(a);
    })
    return (
      descendingGreatestCals[0] +
      descendingGreatestCals[1] +
      descendingGreatestCals[2]
    );
}

console.log(part1Ans)
console.log(part2Ans)