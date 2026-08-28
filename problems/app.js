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

function findMaxNum(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxNum < arr[i]) maxNum = arr[i];
  }
  return maxNum;
}
// console.log(findMaxNum([12, 4, 19, 7, 15]));
// console.log(findMaxNum([]));
// console.log(findMaxNum([7]));
// console.log(findMaxNum([-5, -2, -10]));
// console.log(findMaxNum([5, 5, 5]));
// console.log(findMaxNum([-10, -3, -20, -1]));

function findMinNum(arr) {
  let minNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minNum > arr[i]) minNum = arr[i];
  }
  return minNum;
}
// console.log(findMinNum([12, 4, 19, 7, 15]));
// console.log(findMinNum([]));
// console.log(findMinNum([7]));
// console.log(findMinNum([-5, -2, -10]));
// console.log(findMinNum([5, 5, 5]));
// console.log(findMinNum([-10, -3, -20, -1]));

function sumAllPositiveNums(arr) {
  let countPositiveNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) countPositiveNum += arr[i];
  }
  return countPositiveNum;
}
// console.log(sumAllPositiveNums([-5, 10, -2, 7, 3, -8]));

function countGreater10Num(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) count++;
  }
  return count;
}
// console.log(countGreater10Num([5, 12, 8, 20, 3, 15, 10]));
