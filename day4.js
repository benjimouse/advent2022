const {
    readFileSync,
    promises: fsPromises
} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    return contents.split(/\r?\n/);
}

runTest('data4.txt')

function runTest(textFile) {
    const part1 = partOne(syncReadFile(textFile));
    console.log('Part 1 - ' + part1);
    const part2 = partTwo(syncReadFile(textFile));
    console.log('Part 2 - ' + part2);
}

function partOne(contents) {
    let totalFullyContaining = 0;
    contents.forEach(element => {
        let eachRow = element.split(',');
        const firstVal = parseInt(eachRow[0].split('-')[0]);
        const secondVal = parseInt(eachRow[0].split('-')[1]);
        const thirdVal = parseInt(eachRow[1].split('-')[0]);
        const forthVal = parseInt(eachRow[1].split('-')[1]);

        if (firstVal <= forthVal && thirdVal <= secondVal) {
            totalFullyContaining = totalFullyContaining + 1;
        } else {
            console.log(eachRow);
        }
    });
    return totalFullyContaining;
}

function partTwo(contents) {
    return 2;
}