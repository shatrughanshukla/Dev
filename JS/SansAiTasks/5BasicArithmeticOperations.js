/*

    Basic Arithmetic Operations

        Define Callback Functions:

            Define a callback function named addNumbers that takes two numbers and returns their sum.
            Define a callback function named multiplyNumbers that takes two numbers and returns their product.
            Define a callback function named subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.
            Define a callback function named divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.

        Define performArithmetic Function:

            Define a function named performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation) and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).
            Inside performArithmetic, call the operation function and pass num1 and num2 as arguments.
            The function should return the result.

        Call performArithmetic with Callback Functions:

            Call performArithmetic with two numbers (e.g., 5 and 3) and the addNumbers callback function. Log the result to the console.
            Call performArithmetic with two numbers (e.g., 5 and 3) and the multiplyNumbers callback function. Log the result to the console.
            Call performArithmetic with two numbers (e.g., 5 and 3) and the subtractNumbers callback function. Log the result to the console.
            Call performArithmetic with two numbers (e.g., 5 and 3) and the divideNumbers callback function. Log the result to the console.

        Observe the Higher-Order Function:

            Observe the performArithmetic function to understand why higher-order functions are used.
            Higher-order functions like performArithmetic are useful because they can take other functions as arguments, allowing for more flexible and reusable code.

*/

function addNumbers(num1, num2) {
  return num1 + num2;
}
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
function subtractNumbers(num1, num2) {
  return num1 - num2;
}
function divideNumbers(num1, num2) {
  if (num2 == 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

function performArithmetic(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(performArithmetic(5, 3, addNumbers));
console.log(performArithmetic(5, 3, multiplyNumbers));
console.log(performArithmetic(5, 3, subtractNumbers));
console.log(performArithmetic(5, 3, divideNumbers));