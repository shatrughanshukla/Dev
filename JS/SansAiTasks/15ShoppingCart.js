/*

    Shopping Cart

        Define the Array of Cart Items:

            Define an array called cart.
            Populate the array with several objects, each representing an item in the shopping cart with properties such as name, price, and quantity.

        Define the calculateTotalPrice Function Using forEach:

            Define a function called calculateTotalPrice that takes one parameter: cart (the array of item objects).
            Inside the function, initialize a variable to hold the total price.
            Use the forEach method to iterate over the cart array.
            For each item, calculate the total price by multiplying the item's price and quantity, and add it to the total price variable.
            Return the total price.

        Call the calculateTotalPrice Function:

            Call the calculateTotalPrice function with the cart array as an argument.
            Log the result to the console.

*/

let cart = [
  { name: "Dhaniya", price: 120, quantity: 1 },
  { name: "Raddish", price: 90, quantity: 2 },
  { name: "Mustard Oil", price: 1206, quantity: 5 },
];

function calculateTotalPrice(cart) {
  let totalPrice = 0;
  cart.forEach(function (item) {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
}

let totalSum = calculateTotalPrice(cart);
console.log(totalSum);