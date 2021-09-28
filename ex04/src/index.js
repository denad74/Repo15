const milili = [10, 25, 4]; // DO NOT change this line

function myArr(mili) {
    'use strict';

    // Only change code below this line
    // Using mili = [4, 10, 25] would be invalid
    
    let a = mili[0];
    milili[0] = mili[2];
    milili[2] = mili[1];
    milili[1] = a;
    
    // Only change code above this line
    return mili;
    
}

console.log(myArr(milili)); //Change this line

module.exports = myArr;