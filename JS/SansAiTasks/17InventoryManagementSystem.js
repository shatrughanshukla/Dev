/*

    Inventory Management System

        Define the Array of Inventory Items:

            Define an array called inventory.
            Populate the array with several objects, each representing a product in the store's inventory with properties such as id, name, price, quantity, and any other relevant details.

        Create the Product Class:

            Create a class called Product that can be used to create new product objects, which can then be added to the inventory array.
            The class should have a constructor that initializes the properties: id, name, price, quantity, and any other relevant details.

        Define the displayProducts Function:

            Define a function called displayProducts.
            Use the forEach method to iterate over the inventory array.
            Log each product in the format: ProductName - Price (Quantity).

        Define the addProduct Function:

            Define a function called addProduct that takes product details as input: id, name, price, quantity.
            Inside the function, create a new product object using the Product class.
            Add the new product object to the inventory array.

        Define the updateProduct Function:

            Define a function called updateProduct that takes a product id and a quantity as arguments.
            Use the find method to locate the product with the matching id in the inventory array.
            If the product is found, update its quantity.
            Define another function called updateProductWithMap, which does the same thing as updateProduct, but uses the map function instead. 

        Define the removeProduct Function:

            Define a function called removeProduct that takes a product id as an argument.
            Use the filter method to create a new array that excludes the product with the matching id.
            Update the inventory array with the new array.

*/

let inventory = [
  { id: 1, name: "Keyboard", price: 999, quantity: 10 },
  { id: 2, name: "Mouse", price: 599, quantity: 15 },
  { id: 3, name: "Monitor", price: 6999, quantity: 5 },
];

class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

function displayProducts() {
  inventory.forEach((product) => {
    console.log(`${product.name} - ₹${product.price}(${product.quantity})`);
  });
}

function addProduct(id, name, price, quantity) {
  const newProduct = new Product(id, name, price, quantity);
  inventory.push(newProduct);
}

function updateProduct(id, quantity) {
  const product = inventory.find((item) => item.id == id);
  if (product) {
    product.quantity = quantity;
  }
}

function updateProductWithMap(id, quantity) {
  inventory = inventory.map((product) =>
    product.id === id ? { ...product, quantity: quantity } : product
  );
}

/*
 1. Ternary Operator (? :)
        Acts like an if-else.
        Syntax: condition ? valueIfTrue : valueIfFalse.

 2. Condition: product.id === id
        Checks if the current product has the same id we want to update.

 3. If True: { ...product, quantity: quantity }
        Uses spread syntax (...product) to copy all existing properties.
        Then overwrites the quantity property with the new value.

 4. If False: product
        If the ID doesn’t match, it just returns the product unchanged.
*/

function removeProduct(id) {
  inventory = inventory.filter((product) => product.id !== id);
}

