// Day 7: Objects

console.log("Activity 1: Object Creation and Access");

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "Gora",
  author: "Rabindranath Tagore",
  year: 1910,
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(`The title of the book is: ${book.title}`);
console.log(`The author of the book is: ${book.author}`);

console.log();
console.log("Activity 2: Object Methods");

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getBookInfo = function () {
  return `${this.title} by ${this.author}`;
};
console.log(book.getBookInfo());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2022);
console.log(book);

console.log();
console.log("Activity 3: Nested Objects");

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Central Library",
  books: [
    {
      title: "Gora",
      author: "Rabindranath Tagore",
      year: 1910,
    },
    {
      title: "Pather Panchali",
      author: "Bibhutibhushan Bandyopadhyay",
      year: 1929,
    },
    {
      title: "Aranyak",
      author: "Bibhutibhushan Bandyopadhyay",
      year: 1939,
    },
  ],
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`The name of the library is: ${library.name}`);
let titles = [];
for (let i = 0; i < library.books.length; i++) {
  titles.push(library.books[i].title);
}
console.log(
  `The titles of all the books in the library are: ${titles.join(", ")}`
);

console.log();
console.log("Activity 4: The this Keyword");

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getBookInfo = function () {
  return `${this.title} (${this.year})`;
};
console.log(book.getBookInfo());

console.log();
console.log("Activity 5: Object Iteration");

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(`Keys of the book object: ${Object.keys(book)}`);
console.log(`Values of the book object: ${Object.values(book)}`);
