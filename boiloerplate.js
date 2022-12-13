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
    const part1 = partOne(syncReadFile(textFile));
    console.log('Part 1 - ' + part1);
    const part2 = partTwo(syncReadFile(textFile));
    console.log('Part 2 - ' + part2);
}

function partOne(contents){
    return 1
}
function partTwo(contents){
    return 2
}