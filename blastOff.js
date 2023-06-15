function setBlastOff(countDown) {
    console.log('Set blastoff in...');
    for (let i=countDown; i>=0; i--) {
        if(i === 0) {
            console.log('BlastOff! 🚀🚀');
        } else {
            let blastText = i + "*".repeat(i);
            console.log(blastText);
        }
    }
}
const myBlast = setBlastOff(10);