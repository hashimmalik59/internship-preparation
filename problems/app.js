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

function findFirstEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return arr[i];
  }
}
// console.log(findFirstEvenNumber([7, 9, 11, 14, 20, 3]));

function findFirstPositiveNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) return arr[i];
  }
}
// console.log(findFirstPositiveNum([-5, -2, -8, 0, 7, 3]));

// -5 > 0 => false
// -2 > 0 => false
// -8 > 0 => false
// 0 > 0 => false
// 7 > 0 => true(function terminates here)

function findFirstNegativeNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return arr[i];
  }
}
// console.log(findFirstNegativeNumber([4, 8, 3, -6, 10, -2]));

// 4 < 0 = false
// 8 < 0 = false
// 3 < 0 = false
// -6 < 0 = true(function terminate)

// input: array of numbers
// output: single number 2
// psuedocode:
// - function takes an input which is array
// - iterate each array element
// - if array current number is equal to 12
// - than return its index

function returnTargetedNumIndex(arr, targetedNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetedNum) return i;
  }
}
// console.log(returnTargetedNumIndex([4, 7, 12, 9, 15], 12));

// 4 === 12 = false
// 7 === 12 = false
// 12 === 12 = true(terminates here)

// input: array of numbers
// output: single number(3)
// psuedocode:
// * function takes 2 inputs which is array, and targeted number
// * count variable for duplicate num(0)
// * iterate each array element
// * if array current element equal to 2
// * than count + 1 and update count
// return count

function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) count++;
  }
  return count;
}
// console.log(countOccurrences([2, 5, 2, 8, 2, 7, 5], 2));
// console.log(countOccurrences([2, 5, 2, 8, 2, 7, 5], 9));
// console.log(countOccurrences([2, 5, 2, 8, 2, 7, 5], []));
// console.log(countOccurrences([2, 5, 2, 8, 2, 7, 5], 0));
// console.log(countOccurrences([2, 5, 2, 8, 2, 7, 5], 1));

// 2 === 2 => true => count(0) + 1 = 1
// 5 === 2 => false => count(1) = 1
// 2 === 2 => true => count(1) + 1 = 2
// 8 === 2 => false => count(2) = 2
// 2 === 2 => true => count(2) + 1 = 3
// 7 === 2 => false => count(3) = 3
// 5 === 2 => false => count(3) = 3

// input: array of numbers
// output: single number(4)
// psuedocode:
// * function takes 2 inputs which is array and targeted number
// * lastIndex variable for getting last index
// * index variable which is 0
// * iterate each array element
// * if array current element equal to targeted number(2)
// * than return the current index

function lastOccurrence(arr, targetNum) {
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNum) lastIndex = i;
  }
  return lastIndex;
}
// console.log(lastOccurrence([2, 5, 2, 8, 2, 7, 5], 9));
// console.log(lastOccurrence([], 2));
// console.log(lastOccurrence([5], 5));
// console.log(lastOccurrence([5], 2));
// console.log(lastOccurrence([2, 2, 2], 2));
// console.log(lastOccurrence([1, 2, 3, 2, 4], 2));
// console.log(lastOccurrence([1, 3, 5], 2));
// -1(target not found)

// input: array of numbers
// output: single number(1)
// psuedocode:
// * function takes an input which is array
// * array for pushing positive array numbers
// * minNum variable
// * iterate array each element
// * if array current element is greater than 0
// * push into positive array
// * iterate positive array
// * if minNum is greater than positive array current element
// * than update minNum
// * return minNum

function minimumPositiveNumber(arr) {
  let positiveArr = [];
  let minNum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveArr.push(arr[i]);
      minNum = positiveArr[0];
      for (let i = 0; i < positiveArr.length; i++) {
        if (minNum > positiveArr[i]) minNum = positiveArr[i];
      }
    }
  }
  return minNum;
}
// console.log(minimumPositiveNumber([-5, 8, 3, -2, 10, 1, -7]));

// input: array of numbers
// output: single number(20)
// psuedocode:
// * function takes an input which is array
// * create varible sum(0)
// * iterate each array element
// * if array current element completely divided by 2
// * than sum + 1
// * return sum

// dryrun
// 3 % 2 === 0 => false => count(0)
// 8 % 2 === 0 => true => count(0) + 1 = 1
// 11 % 2 === 0 => false => count(1)
// 4 % 2 === 0 => true => count(1) + 1 = 2
// 6 % 2 === 0 => true => count(2) + 1 = 3
// 9 % 2 === 0 => false => count(3)
// 2 % 2 === 0 => true => count(3) + 1 = 4

function sumAllEvenNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}
// console.log(sumAllEvenNums([3, 8, 11, 4, 6, 9, 2]));
// console.log(sumAllEvenNums([]));
// console.log(sumAllEvenNums([null, undefined, 4]));
// console.log(sumAllEvenNums([-1, false, 5, true, 0]));

// input: array of numbers
// output: single number(3)
// psuedocode:
// - function takes an input which is array
// - a variable for count numbers(0)
// - iterate each array number
// - if number is greater than 5 and less than 15
// - than count + 1 and update count
// - return count

// dryrun:
// - 3 > 5 && 3 < 15 => false => count(0)
// - 7 > 5 && 7 < 15 => true => count(0) + 1
// - 12 > 5 && 12 < 15 => true => count(1) + 1
// - 18 > 5 && 18 < 15 => false => count(2)
// - 5 > 5 && 5 < 15 => false => count(2)
// - 15 > 5 && 15 < 15 => false => count(2)
// - 9 > 5 && 9 < 15 => true => count(2) + 1
// - 20 > 5 && 20 < 5 => false => count(3)

function numsBetween5And15(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5 && arr[i] < 15) num++;
  }
  return num;
}
// console.log(numsBetween5And15([3, 7, 12, 18, 5, 15, 9, 20]));
// edgecases
// console.log(numsBetween5And15([])); // 0
// console.log(numsBetween5And15([5, 15])); // 0
// console.log(numsBetween5And15([6, 14])); // 2
// console.log(numsBetween5And15(4, 16, 5, 15)); // 0
// console.log(numsBetween5And15([10, 10, 10])); // 3

// input: array of numbers
// output: single number(4)
// psuedocode:
// * function takes an input which is array
// * variable for count even numbers
// * iterate each array element
// * if array current number is greater than 10 and array current number completely divided by 2
// * than count + 1 and update count
// * return count
// dryrun:
// * 4 > 10 && 4 % 2 => false => count(0)
// * 12 > 10 && 12 % 2 => true => count(0) + 1
// * 7 > 10 && 7 % 2 => false => count(1)
// * 18 > 10 && 18 % 2 => true => count(1) + 1
// * 20 > 10 && 20 % 2 => true => count(2) + 1
// * 9 > 10 && 9 % 2 => false => count(3)
// * 14 > 10 && 14 % 2 => true => count(3) + 1
// * 3 > 10 && 3 % 2 => false => count(4)

function countEvenGreater10(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10 && arr[i] % 2 === 0) count++;
  }
  return count;
}
// console.log(countEvenGreater10([4, 12, 7, 18, 20, 9, 14, 3]));

// input: array of numbers
// output: single number(3)
// psuedocode:
// - function takes an input which is array
// - a variable for count(0) numbers
// iterate each array element
// if array current number is greater than 10
// than count + current array number and update count
// return count
// dryrun
// - 5 > 10 => false => count(0)
// - 12 > 10 => true => count(0) + 12 => 12
// - 8 > 10 => false => count(12)
// - 20 > 10 => true => count(12) + 20 => 32
// - 3 > 10 => false => count(32)
// - 15 > 10 => true => count(32) + 15 = 47
// - 7 > 10 => false => count(47)

function countGreaterNum10(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) sum += arr[i];
  }
  return sum;
}
// console.log(countGreaterNum10([5, 12, 8, 20, 3, 15, 7]));

// input: array of numbers
// output: single number(4)
// psuedocode:
// - function takes an input which is array
// - create variable for count(0) nums
// - iterate each array element
// - if array current number is less than 10
// - than count + 1 and update count
// - return count
// dryrun:
// - 12 < 10 => false => count(0)
// - 5 < 10 => true => count(0) + 1 = 1
// - 8 < 10 => true => count(1) + 1 = 2
// - 20 < 10 => false => count(2)
// - 3 < 10 => true => count(2) + 1 = 3
// - 15 < 10 => false => count(3)
// - 7 < 10 => true => count(3) + 1 = 4

function countNumLessThan10(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) count++;
  }
  return count;
}
// console.log(countNumLessThan10([12, 5, 8, 20, 3, 15, 7])); // 4
// edgecase
// console.log(countNumLessThan10([])); // 0
// console.log(countNumLessThan10([10, 12, 17, 25])); // 0
// console.log(countNumLessThan10([3, 6, 1, 8, 9])); // 5

// input: array of numbers
// output: single number(3)
// psuedocode:
// - function takes an input which is array
// - variable for count(0)
// - iterate each array number
// - if array current number is greater than 10 and array current number is completely divided by 2
// - than count + 1 and update count
// - return count
// dryrun:
// - 3 > 0 and 3 % 2 === 0 => false => count(0)
// - 8 > 0 and 8 % 2 === 0 => true => count(0) + 1 = 1
// - -2 > 0 and -2 % 2 === 0 => false => count(1)
// - 11 > 0 and 11 % 2 === 0 => false => count(1)
// - 14 > 0 and 14 % 2 === 0 => true => count(1) + 1 = 2
// - -6 > 0 and -6 % 2 === 0 => false => count(2)
// - 7 > 0 and 7 % 2 === 0 => false => count(2)
// - 20 > 0 and 20 % 2 === 0 => true => count(2) + 1 = 3

function countPositiveEvenNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) count++;
  }
  return count;
}
// console.log(countPositiveEvenNum([3, 8, -2, 11, 14, -6, 7, 20])); // 3
// console.log(countPositiveEvenNum([])); // 0
// console.log(countPositiveEvenNum([-2, -5, -1, -9])); // 0
// console.log(countPositiveEvenNum([3, 5, 7, 9])); // 0
// console.log(countPositiveEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 4

// input: array of numbers
// output: single number(5)
// psuedocode:
// - function takes an input which is array
// - iterate each array number
// - if array current number is greater than 0 and current number completely divided by 2
// then return this number
// dryrun:
// - -3 > 0 and -3 % 2 === 0 => false
// - 5 > 0 and 5 % 2 === 0 => false
// - 7 > 0 and 7 % 2 === 0 => false
// - -2 > 0 and -2 % 2 === 0 => false
// - 9 > 0 and 9 % 2 === 0 => false
// - 12 > 0 and 12 % 2 === 0 => true(function terminate here)
function firstPositiveEvenNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) return arr[i];
  }
}

// console.log(firstPositiveEvenNum([-3, 5, 7, -2, 9, 12, 8, 14])); // 12
// edgecases
// console.log(firstPositiveEvenNum([])); // undefined
// console.log(firstPositiveEvenNum([-2, -9, -4, -7])); // undefined
// console.log(firstPositiveEvenNum([1, 2, 3])); // 2

// input: array of numbers
// output: single number(42)
// psuedocode:
// - function takes an input which is array
// - sum varible for addition which is zero at first
// - iterate array each element
// - if array current number is greater than 0 and current number is completely divided by 2
// - than sum + array current number and update sum
// - return sum
// dryrun:
// - 3 > 0 and 3 % 2 === 0 => false => sum(0)
// - 8 > 0 and 8 % 2 === 0 => true => sum(0) + 8 = 8
// - -2 > 0 and -2 % 2 === 0 => false => sum(8)
// - 11 > 0 and 11 % 2 === 0 => false => sum(8)
// - 14 > 0 and 14 % 2 === 0 => true => sum(8) + 14 = 22
// - -6 > 0 and -6 % 2 === 0 => false => sum(22)
// - 7 > 0 and 7 % 2 === 0 => false => sum(22)
// - 20 > 0 and 20 % 2 === 0 => true => sum(22) + 20 + 42

function sumOfPosiEvenNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) sum += arr[i];
  }
  return sum;
}
// console.log(sumOfPosiEvenNums([3, 8, -2, 11, 14, -6, 7, 20])); // 42
// edgecase:
// console.log(sumOfPosiEvenNums([])); // 0
// console.log(sumOfPosiEvenNums([-2, -4, -6, -8])); // 0
// console.log(sumOfPosiEvenNums([1, 3, 5, 7])); // 0

// input: array of numbers
// output: single number(20)
// psuedocode:
// - function takes an input which is array
// - compare variable with wach array num which is arr first number
// - iterate each array num
// - if array current num is greater than 0 and array current num is completely divided by 2 also array current number is greater than maxNum
// - than assign current array num into maxNum
// - return maxNum
// dryrun:
// - 0 > 0 => false => maxNum(0)
// - -4 > 0 => false => maxNum(0)
// - 7 > 0 and 7 % 2 === 0 => false => maxNum(0)
// - 12 > 0 and 12 % 2 === 0 => true => maxNum(12)
// - -2 > 0 => false => maxNum(12)
// - 18 > 0 and 18 % 2 === 0 => true => maxNum(18)
// - 9 > 0 and 9 % 2 === 0 => false => maxNum(18)
// - 20 > 0 and 20 % 2 === 0 => true => maxNum(20)
// - 15 > 0 and 15 % 2 === 0 => false => maxNum(20)

function findPositiveEvenLargeNum(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0 && arr[i] > maxNum) maxNum = arr[i];
  }
  return maxNum;
}
console.log(findPositiveEvenLargeNum([-4, 7, 12, -2, 18, 9, 20, 15])); // 20
