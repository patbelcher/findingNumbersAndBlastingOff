let statusCheck = null;

function findEvenNumber(evenNum) {
    console.log(`${evenNum} is the array`);
    for( let i = 0; i < evenNum.length; i++) {
        if(evenNum[i] % 2 === 0) {
            console.log(`${evenNum[i]} is even. `);
        } else {
            console.log("x");
        }
    }
}

const evenArray = [35, 777, 65,967,23,436,8976,45,234,7,435];
const figureEven = findEvenNumber(evenArray);