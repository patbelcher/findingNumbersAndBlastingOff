function findOddNumber(numOdd) {
    console.log(`The array is ${numOdd}`);
    for(let i=0; i<numOdd.length; i++){
        if (numOdd[i] % 2 !== 0) {
            console.log(`${numOdd[i]} is odd.`);
        } else {
            console.log("x");
        }
    }
}

const newArray = [97,234,456,2754,345,753,9875,257,987,2345];
const myOddds = findOddNumber(newArray);