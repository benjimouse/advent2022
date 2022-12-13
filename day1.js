const {readFileSync, promises: fsPromises} = require('fs');
test1()
function test1(){
    runDay1(syncReadFile('data.txt'))
}
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  
    return arr;
  }
  function runDay1(arrOfCalories){
    let largestTotal =0;
    let currTotal = 0;
    let elfArray =[];
    arrOfCalories.forEach(element => {
        if(element !==''){
            currTotal = currTotal+parseInt(element);
        } else {
            elfArray.push(currTotal);
            currTotal = 0;
        }
        if (currTotal > largestTotal){
            largestTotal = currTotal;
        }
       //console.log(element); 
    });
    elfArray.sort(function(a,b){return a-b});
    elfArray.reverse();
    console.log(elfArray);
    console.log(parseInt(elfArray[0])+parseInt(elfArray[1])+parseInt(elfArray[2]));
  }
