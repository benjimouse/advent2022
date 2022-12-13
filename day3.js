const {
    readFileSync,
    promises: fsPromises
} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

runTest('data3.txt')

function runTest(textFile) {
    const part1 = runDay(syncReadFile(textFile));
    console.log('Part 1 - ' + part1);
    const part2 = partTwo(syncReadFile(textFile));
    console.log('Part 2 - ' + part2);
}

function partTwo(contents) {
    let totalVal = 0;
    for (i = 0; i < contents.length; i = i + 3) {
        // Get three rows
        const firstRow = contents[i];
        const secondRow = contents[i + 1];
        const thirdRow = contents[i + 2];

        // Get letter that is in all three rows
        const letter = getIndividualLetter(firstRow, secondRow, thirdRow);
        
        // Get value for letter
        const alphaVal = getAlphaVal(letter);
        totalVal = totalVal + alphaVal;

    }


    return totalVal;
}

function getIndividualLetter(first, second, third) {
    let similarLetters = [];
    let matchingLetter = '';
    first.split('').forEach(letter => {
        if (second.includes(letter)) {
            similarLetters.push(letter);
        }

    });
    similarLetters.every(letter => {
        if (third.includes(letter)) {
            matchingLetter = letter;
            return false;
        }
        return true;
    });
    return matchingLetter;
}




function runDay(contents) {
    let totalValue = 0;
    // loop over all the contents
    contents.forEach(element => {
        // split the contents in half
        const leftContents = element.substring(0, Math.floor(element.length / 2));
        const rightContents = element.substring(Math.floor(element.length / 2));
        //console.log(leftContents +'-'+ leftContents.length);
        //console.log(rightContents +'-'+ rightContents.length);
        // find the item that is in both halves
        let matchingLetter = '';
        leftContents.split('').every(letter => {
            if (rightContents.includes(letter)) {
                matchingLetter = letter;
                return false;
            }
            return true;
        });

        // find the value of that letter
        const alphaVal = getAlphaVal(matchingLetter);

        // add to the total
        totalValue = totalValue + alphaVal;

    });
    return totalValue;

}

function getAlphaVal(letter) {
    let alphaVal = letter.toLowerCase().charCodeAt(0) - 96
    if (isUpperCase(letter)) {
        alphaVal = alphaVal + 26;
    }
    return alphaVal;
}

function isUpperCase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}