/*

    Colors

        Define and Log the colors Array:

            Define a variable named colors and assign it an array containing strings representing different colors (e.g., "red", "green", "blue").
            Log the first element of the colors array to the console.

        Modify and Add color elements:

            Change the second element of the colors array to "yellow". Log the second element of the colors array to the console to verify the change.
            Add a new color to the end of the colors array. Log the last element of the colors array to the console.

        Iterate using Loops over the colors Array:

            Use a for loop to iterate over the colors array and log each color to the console.
            Use a while loop to iterate over the colors array and log each color to the console.
            Use a for...of loop to iterate over the colors array and log each color to the console.

        Check Array Properties:

            Use the typeof operator to check the type of colors array and log it to the console.
            Log the length property of the colors array to the console to see the number of elements in the array.

        Array Methods:

            Use the push method to add another color to the end of the colors array.
            Use the pop method to remove the last color from the colors array.
            Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.

        Add and Iterate Over Properties:

            Add a property to the colors array called owner and set its value to your name.
            Log the colors array to see if the owner property is added.
            Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.

*/

const colors = ["red", "green", "blue"];
console.log(colors[0]);

colors[1] = "yellow";
console.log(colors[1]);

colors.push("Purple");
console.log(colors[colors.length - 1]);

for (let i = 0; i < colors.length - 1; i++) {
  console.log(colors[i]);
}

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let color of colors) {
  console.log(color);
}

console.log(typeof colors);
console.log(colors.length);

colors.push("peach");
console.log(colors);

colors.pop();
console.log(colors);
console.log(colors.indexOf("blue"));

colors.owner = "Shatrughan Shukla";
console.log(colors);

for (let key in colors) {
  console.log(`${key}: ${colors[key]}`);
}