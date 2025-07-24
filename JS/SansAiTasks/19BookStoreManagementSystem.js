/*

Bookstore Management System

    Define the Array of Inventory Items:

        Define an array called inventory.
        Populate the array with several objects, each representing a book in the bookstore's inventory with properties such as id, title, author, price, quantity, and any other relevant details.

    Create the Book Class:

        Create a class called Book that can be used to create new book objects, which can then be added to the inventory array.
        The class should have a constructor that initializes the properties: id, title, author, price, quantity, and any other relevant details.

    Define the displayBooks Function:

        Define a function called displayBooks.
        Use the forEach method to iterate over the inventory array.
        Log each book in the format: BookTitle - Author (Price).

    Define the addBook Function:

        Define a function called addBook that takes book details as input: id, title, author, price, quantity.
        Inside the function, create a new book object using the Book class.
        Add the new book object to the inventory array.

    Define the updateBook Function:

        Define a function called updateBook that takes a book id and a quantity as arguments.
        Use the find method to locate the book with the matching id in the inventory array.
        If the book is found, update its details.
        Define another function called updateBookWithMap, which does the same thing as updateBook, but uses the map function instead.

    Define the removeBook Function:

        Define a function called removeBook that takes a book id as an argument.
        Use the filter method to create a new array that excludes the book with the matching id.
        Update the inventory array with the new array.

*/

let inventory = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 450,
    quantity: 10,
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 300,
    quantity: 5,
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Francesc Miralles",
    price: 250,
    quantity: 7,
  },
];

class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

function displayBooks() {
  inventory.forEach((book) => {
    console.log(`${book.title} - ${book.author}(${book.price})`);
  });
}

function addBook(id, title, author, price, quantity) {
  newBook = new Book(id, title, author, price, quantity);
  inventory.push(newBook);
}

function updateBook(id, quantity) {
  let book = inventory.find((item) => item.id === id);
  if (book) {
    book.quantity = quantity;
  }
}

function updateBookWithMap(id, quantity) {
  inventory = inventory.map((book) =>
    book.id === id ? { ...book, quantity: quantity } : book
  );
}

function removeBook(id) {
  inventory = inventory.filter((book) => book.id !== id);
}