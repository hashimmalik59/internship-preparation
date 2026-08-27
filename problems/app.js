function sumAllArrNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumAllArrNums([5, 10, 3, 7, 2]));
// console.log(sumAllArrNums([]));
// console.log(sumAllArrNums([5]));
// console.log(sumAllArrNums([-2, 5, -3]));

function positiveLength(arr) {
  let positiveCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveCount++;
  }
  return positiveCount;
}
// console.log(positiveLength([-3, 5, -1, 8, 0, 2, -7]));
// console.log(positiveLength([]));
// console.log(positiveLength([-5, -2, -9]));
// console.log(positiveLength([1, 2, 3]));
// console.log(positiveLength([0, 0, 0]));
// console.log(positiveLength([-1, 0, 5]));
