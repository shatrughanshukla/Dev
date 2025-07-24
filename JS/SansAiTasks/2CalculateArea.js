/*
Calculate Area

    Calculate Area Function:

        Define a function named calculateArea that takes two parameters: width and height.
        Inside the function, return the area of a rectangle by multiplying width and height.
        Call the calculateArea function with width = 5 and height = 10.
        Log the result to the console.

    Modify Calculate Area Function with Default Values:

        Define a new function named calculateAreaWithDefaults that has default values of 1 for both width and height.
        This means that if no arguments are provided, the function should return 1.
        Call the calculateAreaWithDefaults function without any arguments and log the result to the console.
        Call the calculateAreaWithDefaults function with width = 5 and height = 10, and log the result to the console.

    Rewrite Calculate Area as a Function Expression:

        Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.
        Call the calculateAreaFunction with width = 5 and height = 10, and log the result to the console.

    Rewrite Calculate Area as an Arrow Function:

        Rewrite the calculateArea function as an arrow function with a separate name calculateAreaArrow.
        Call the calculateAreaArrow function with width = 5 and height = 10, and log the result to the console.
*/

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10));

function calculateAreaWithDefaults(width = 1, height = 1) {
  return width * height;
}
console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(5, 10));

const calculateAreaFunction = function (width, height) {
  return height * width;
};
console.log(calculateAreaFunction(5, 10));

const calculateAreaArrow = (width, height) => {
  return width * height;
};
console.log(calculateAreaArrow(5, 10));