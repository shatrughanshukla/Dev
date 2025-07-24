/*
Array Methods - Foreach, Map, Filter

    Define and Initialize the Array:

        Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).

    Iterate and Log Using forEach():

        Call the forEach method to iterate over the numbers array and log each number to the console. Write the callback function as a function expression.
        Call the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console. Write the callback function as a function expression.

    Iterate and Create a New Modified Array Using map():

        Call the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. Write the callback function as a function expression. Log to the console the squaredNumbers.
        Rewrite the call to the above map method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same squaredNumbers array and log it to the console. 

    Iterate and Create a New Filtered Array Using filter():

        Call the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Write the callback function as a function expression. Log the evenNumbers array to the console.
        Rewrite the call to the above filter method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same evenNumbers array and log it to the console.
*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num);
});

numbers.forEach(function (num) {
  console.log(num * 2);
});

let squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log(squaredNumbers);

squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

let evenNumbers = numbers.filter(function (num) {
  return num % 2 == 0;
});
console.log(evenNumbers);

evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);