/*

    Custom Array Methods

        forEachArray Function:

            Define a function called forEachArray that takes two arguments: an array and a callback function.
            Replicate the behavior of JavaScript's built-in forEach function.
            The forEachArray function should apply the callback function to each element of the array.

        mapArray Function:

            Define a function called mapArray that takes two arguments: an array and a callback function.
            Replicate the behavior of JavaScript's built-in map function.
            The mapArray function should apply the callback function to each element of the array and return a new array containing the transformed elements.

        filterArray Function:

            Define a function called filterArray that takes two arguments: an array and a callback function.
            Replicate the behavior of JavaScript's built-in filter function.
            The function should apply the callback function to each element of the array and return a new array containing only the elements for which the callback function returns true.

*/

function forEachArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let numArr = [1, 2, 3];
forEachArray(numArr, function (num) {
  console.log(num);
});

function mapArray(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
let nums = [1, 2, 3];
let squared = mapArray(nums, function (nums) {
  return nums * nums;
});
console.log(squared);

function filterArray(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

let num = [1, 2, 3, 4, 5];
let evens = filterArray(num, function (num) {
  return num % 2 == 0;
});
console.log(evens);