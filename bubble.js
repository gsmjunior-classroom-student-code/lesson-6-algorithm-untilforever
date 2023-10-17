let arr = [3,1,5,6,2,4];
let n = array.length;
let swapped;
do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);
console.log(arr) // -> [1,2,3,4,5,6]
