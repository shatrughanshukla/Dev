/*

Higher Order and Callback functions

    Define Higher Order Function:

        Define a function named higherOrderFunction that takes two parameters: num (a number) and callback (a function).
        Inside higherOrderFunction, call the callback function and pass num as an argument.

    Define Callback Function and Call Higher Order Function:
        Define a function named callbackFunction that takes a number as an argument and logs it to the console.
        Call higherOrderFunction with a number (e.g., 5) and pass callbackFunction as the callback.

    Call Higher Order Function with a Function Expression as Callback:
        Call higherOrderFunction with a number (e.g., 10) and a function expression as the callback.
        The function expression should log the number to the console.

    Callback to Log Square of the Number:
        Call higherOrderFunction again with a number (e.g., 4) and a function expression as the callback.
        The new function expression should log the square of the number to the console.

    Callback to Log Sum of Two Numbers:

        Define a new function named newHigherOrderFunction that takes three parameters: num1, num2, and callback.
        Inside newHigherOrderFunction, call the callback function with num1 and num2 as arguments.
        Call newHigherOrderFunction with two numbers (e.g., 3 and 7) and a function expression as the callback.

*/

function higherOrderFunction(num, callback) {
  callback(num);
}
function callbackFunction(n) {
  console.log(n);
}
higherOrderFunction(5, callbackFunction);

higherOrderFunction(10, function (n) {
  console.log(n);
});

higherOrderFunction(4, function (n) {
  console.log(n * n);
});

function newHigherOrderFunction(num1, num2, callback) {
  callback(num1, num2);
}
newHigherOrderFunction(3, 7, function (a, b) {
  console.log(a + b);
});