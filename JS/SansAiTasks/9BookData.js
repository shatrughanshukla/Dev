/*
    Book Data

    Define the Book Class:

        Define a class named Book that takes parameters for title, author, publisher, year, and genre.
        Inside the class's constructor, set these parameters as properties of the book object.

    Add Methods to the Book Class:

        Add a method named describe inside the class that logs a brief description of the book, combining the title, author, and year, e.g., "Five Point Someone - Chetan Bhagat (2004)".
        Add a method named displayGenre inside the class that logs the genre of the book formatted as a string, e.g., "Genre: Fiction".

    Create and Log book Objects:

        Create an object named classicBook with properties representing a classic novel’s details. For example, "Pride and Prejudice" by Jane Austen, published by T. Egerton in 1813, genre "Classic".
        Create an object named sciFiBook with properties representing a science fiction book. For example, "Dune" by Frank Herbert, published by Chilton Books in 1965, genre "Science Fiction".
        Log both objects to the console.

    Call Methods on book Objects:

        Call the describe method on the classicBook object to see a summary of the book.
        Call the displayGenre method on the classicBook object to log the genre.
        Call the describe method on the sciFiBook object to see a summary of the book.
        Call the displayGenre method on the sciFiBook object to log the genre.

*/

class Book {
  constructor(title, author, publisher, year, genre) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.genre = genre;
  }
  describe() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
  }
  displayGenre() {
    console.log(`Genre: ${this.genre}`);
  }
}
const classicBook = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  "T.Egerston",
  1813,
  "classic"
);

const sciFiBook = new Book(
  "Dune",
  "Frank Herbert",
  "Chilton Books",
  1965,
  "Science Fiction"
);

console.log(classicBook);
console.log(sciFiBook);

classicBook.describe();
classicBook.displayGenre();

sciFiBook.describe();
sciFiBook.displayGenre();