const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`${el1} > ${el2}? `, function(string) {
        if (string === 'yes') {
            callback(true);
        } else if (string === 'no') {
            callback(false);
        } 
    }); 
}

// askIfGreaterThan(1, 2, answer => console.log("thanks for your input"))

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == arr.length - 1) {
        // outerBubbleSortLoop(madeAnySwaps);
        outerBubbleSortLoop(() => {
            console.log("in outer loop")
        });
    } else { 
        askIfGreaterThan(arr[i], arr[i + 1], swapper)
    }
}
console.log(innerBubbleSortLoop([1,2,3], 0, false, outerBubbleSortLoop))

const swapper = function(boolean) {
    if (boolean === true) {
        const temp = arr[i]; 
        arr[i] = arr[i + 1]; 
        arr[i + 1] = temp; 
        madeAnySwaps = true; 
    } else {
        madeAnySwaps = false;
    }
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});