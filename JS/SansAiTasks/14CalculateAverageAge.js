/*

    Calculate Average Age

        Define the Array of People:

            Define an array called people.
            Populate the array with several objects, each representing a person with properties such as name and age.

        Define the calculateAverageAge Function Using forEach:

            Define a function called calculateAverageAge that takes one parameter: people (the array of person objects).
            Inside the function, initialize a variable to hold the sum of all ages.
            Use the forEach method to iterate over the people array and accumulate the sum of their ages.
            Calculate the average age by dividing the total sum by the number of people in the array.
            Return the average age.

        Call the calculateAverageAge Function:

            Call the calculateAverageAge function with the people array as an argument.
            Log the result to the console.

*/

let people = [
  { name: "Shatrughan", age: 20 },
  { name: "Divya", age: 19 },
  { name: "Aman", age: 22 },
  { name: "Rishav", age: 22 },
];

function calculateAverageAge(people) {
  let totalAge = 0;
  people.forEach(function (person) {
    totalAge += person.age;
  });
  let average = totalAge / people.length;
  return average;
}

let averageAge = calculateAverageAge(people);
console.log("Average Age: ", averageAge);