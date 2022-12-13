const {
    readFileSync,
    promises: fsPromises
} = require('fs');
runTest('data2.txt')

function runTest(textFile) {
    const totalScore = runDay(syncReadFile(textFile));
    console.log('Total score = ' + totalScore);
}

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

function runDay(fileContentsAsArray) {
    let totalScore = 0;
    console.log(fileContentsAsArray);
    fileContentsAsArray.forEach(element => {
        const match = element.split(' ');
        switch (match[0]) {
            case 'A': // Opponent chooses Rock
                switch (match[1]) {
                    case 'X': // I need to loose so choose Scissors (3pts)
                        totalScore = totalScore + 3;
                        // Loss
                        totalScore = totalScore + 0;
                        break;
                    case 'Y': // I need to draw so choose Rock (1pt)
                        totalScore = totalScore + 1;
                        // Draw
                        totalScore = totalScore + 3;
                        break;
                    case 'Z': // I need to win so choose Paper (2pts)
                        totalScore = totalScore + 2;
                        // Win
                        totalScore = totalScore + 6;
                        break;
                }
                break;
            case 'B': // Oponent chooses Paper
                switch (match[1]) {
                    case 'X': // I need to loose so choose Rock (1pt)
                        totalScore = totalScore + 1;
                        // Loss
                        totalScore = totalScore + 0;
                        break;
                    case 'Y': // I need to draw so choose Paper (2pts)
                        totalScore = totalScore + 2;
                        // Draw
                        totalScore = totalScore + 3;
                        break;
                    case 'Z': // I need to win so choose Scissors (3pts)
                        totalScore = totalScore + 3;
                        // Win
                        totalScore = totalScore + 6;
                        break;
                }
                break;
            case 'C': // Oponent chooses Scissors
                switch (match[1]) {
                    case 'X': // I need to loose so choose Paper (2pts)
                        totalScore = totalScore + 2;
                        // Loss
                        totalScore = totalScore + 0;
                        break;
                    case 'Y': // I need to draw so choose Scissors (3pts)
                        totalScore = totalScore + 3;
                        // Loss
                        totalScore = totalScore + 3;
                        break;
                    case 'Z': // I need to win so choose Rock (1pt)
                        totalScore = totalScore + 1;
                        // Win
                        totalScore = totalScore + 6;
                        break;
                }
                break;
        }

    });
    return totalScore;
}