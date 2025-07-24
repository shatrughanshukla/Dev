/*
    Simple Mathematical Operations

        Define Callback Functions:

            Define a callback function named doubleNumber that takes a number and returns its double.
            Define another callback function named squareNumber that takes a number and returns its square.
            Define another callback function named incrementNumber that takes a number and returns the number incremented by one.

        Define performOperation Function:

            Define a function named performOperation that accepts two parameters: num (a number on which to perform the operation) and operation (a callback function that specifies the operation to be performed on num).
            Inside performOperation, call the operation function and pass num as an argument.
            The function should return the result.

        Call performOperation with Callback Functions:

            Call performOperation with a number (e.g., 5) and the doubleNumber callback function, and log the result to the console.
            Call performOperation with a number (e.g., 5) and the squareNumber callback function, and log the result to the console.
            Call performOperation with a number (e.g., 5) and the incrementNumber callback function, and log the result to the console.

        Observe the Higher-Order Function:

            Observe the performOperation function to understand why higher-order functions are used.
            Higher-order functions like performOperation are useful because they can take other functions as arguments, allowing for more flexible and reusable code.

*/

function doubleNumber(n) {
  return n * 2;
}
function squareNumber(n) {
  return n * n;
}
function incrementNumber(n) {
  return n + 1;
}

function performOperation(num, operation) {
  return operation(num);
}

console.log(performOperation(5, doubleNumber));
console.log(performOperation(5, squareNumber));
console.log(performOperation(5, incrementNumber));