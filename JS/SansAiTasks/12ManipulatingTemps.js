/*

    Manipulating Temperatures

        Define and Initialize the Array:

            Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).

        Iterate and Log Using forEach():

            Call the forEach method to iterate over the temperatures array and log each temperature to the console. Write the callback function as a function expression.
            Rewrite the call to the above foreach method to do the same thing, but change the callback function to use arrow function syntax.
            Call the forEach method to iterate over the temperatures array and convert each temperature to Fahrenheit using the formula (temperature * 9/5) + 32. Log each converted temperature to the console. Write the callback function as a function expression.
            Rewrite the call to the above foreach method to do the same thing, but change the callback function to use arrow function syntax.

        Iterate and Create a New Modified Array Using map():

            Call the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit equivalent of each temperature in the temperatures array. Write the callback function as a function expression. Log the temperaturesInFahrenheit array to the console. 
            Rewrite the call to the above map method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same temperaturesInFahrenheit array and log it to the console.

        Iterate and Create a New Filtered Array Using filter():

            Call the filter method to create a new array called belowFreezing that contains only the temperatures from the temperatures array that are below 0°C. Write the callback function as a function expression. Log the belowFreezing array to the console. 
            Rewrite the call to the above filter method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same belowFreezing array and log it to the console.

*/

const temperatures = [-3, 14, 22, 5, -10];

temperatures.forEach(function (temp) {
  console.log(temp);
});
temperatures.forEach((temp) => {
  console.log(temp);
});
temperatures.forEach(function (temp) {
  let fahrenhite = temp * (9 / 5) + 32;
  console.log(fahrenhite);
});
temperatures.forEach((temp) => {
  let fahrenhite = temp * (9 / 5) + 32;
  console.log(fahrenhite);
});

let temperaturesInFahrenheit = temperatures.map(function (temp) {
  return temp * (9 / 5) + 32;
});
console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperatures.map((temp) => {
  return temp * (9 / 5) + 32;
});
console.log(temperaturesInFahrenheit);

let belowFreezing = temperatures.filter(function (temp) {
  return temp < 0;
});
console.log(belowFreezing);

belowFreezing = temperatures.filter((temp) => {
  return temp < 0;
});
console.log(belowFreezing);