/*

    Manipulating Product Data

        Define the Array of Products:
        
            Define a variable named products.
            Assign it an array containing several objects, each representing a product with properties such as id, name, price, and category.

        Define the displayProducts Function:

            Create a new function called displayProducts that takes an array as an argument.
            Inside the function, use the forEach method to iterate over the array.
            Log each product in the format: ProductName - $Price (e.g., "Banana - $1.99").

        Calculate and Display Products with Tax:

            Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's id, name, category, and a new priceWithTax which is the original price plus the tax.
            Call the displayProducts function to display the productsWithTax array.

        Filter and Display Food Products:

            Use the filter method to create a new array called foodProducts that contains only the products from the category "Food".
            Call the displayProducts function to display the foodProducts array.

        Find Affordable Products:

            Use the filter method to find products with a price under $10. Store the filtered results in a variable called affordableProducts.
            Use the map method on affordableProducts to return a string for each product that includes the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProductsStrings.
            Log the affordableProductsStrings array to the console.

        Calculate Total Price:

            Initialize a variable totalPrice to 0.
            Sum up the prices of all products and update totalPrice.
            Log totalPrice after the loop.

*/

let products = [
  { id: 1, name: "Banana", price: 1.99, category: "Food" },
  { id: 2, name: "Pen", price: 0.99, category: "Stationary" },
  { id: 3, name: "Earbuds", price: 25.99, category: "Electronics" },
  { id: 4, name: "T-Shirt", price: 9.29, category: "Clothes" },
  { id: 5, name: "Milk", price: 3.59, category: "Food" },
];

function displayProducts(array) {
  array.forEach((product) => {
    console.log(`${product.name} - $${product.price}`);
  });
}

const taxRate = 0.1;
const productsWithTax = products.map((product) => {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    priceWithTax: (product.price * (1 + taxRate)).toFixed(2),
  };
});

function displayProducts(array) {
  array.forEach((product) => {
    const price = product.price || product.priceWithTax;
    console.log(`${product.name} - $${price}`);
  });
}
// console.log("Products with Tax: ");
// productsWithTax.forEach(product => {
//   console.log(`${product.name} - $${product.priceWithTax}`);
// });
displayProducts(productsWithTax);

const foodProducts = products.filter((product) => product.category == "Food");
console.log("\nFood Products:");
displayProducts(foodProducts);

const affordableProducts = products.filter((product) => product.price < 10);
const affordableProductsStrings = affordableProducts.map((product) => {
  return `${product.name} - $${product.price.toFixed(2)}`;
});

console.log("\nAffordable Products: ");
console.log(affordableProductsStrings);

let totalPrice = 0;
products.forEach((product) => {
  totalPrice += product.price;
});
console.log(`\n Total Proce of all products: $${totalPrice.toFixed(2)}`);