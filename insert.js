let arr = [3,1,5,6,2,4];
arr.forEach((v,i) => {
  const min = Math.min(...[...arr].slice(i, arr.length));
  const temp = arr[i];
  arr[arr.indexOf(min)] = temp;
  arr[i] = min;
})
console.log(arr) // -> [1,2,3,4,5,6]
