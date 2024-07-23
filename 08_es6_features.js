// Day 7: ES6+ Features

console.log("Activity 1: Template Literals");

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Soumadip";
const age = 22;
const person = `My name is ${name} and I am ${age} years old.`; // Also known as string interpolation
console.log(person);

console.log();
// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `Where the mind is without fear and the head is held high;
Where knowledge is free;
Where the world has not been broken up into fragments by narrow domestic walls;
Where words come out from the depth of truth.`;
console.log(multiLineString);

console.log();
console.log("Activity 2: Destructuring");

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const user = ["Soumadip", "Majila"];
const [firstName, lastName] = user;
console.log(`Name: ${firstName} ${lastName}`);

console.log();
// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "Chokher Bali",
  author: "Rabindranath Tagore",
  year: 1903,
};
const { title, author } = book;
console.log(`${title} is written by ${author}`);

console.log();
console.log("Activity 3: Spread and Rest Operators");

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 6, 7, 8];
console.log(newArr);

console.log();
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(`Sum = ${sum(1, 2, 3, 4, 5, 6, 7, 8)}`);

console.log();
console.log("Activity 4: Default Parameters");

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a, b = 1) {
  return a * b;
}
console.log(`Product: ${product(5)}`);

console.log();
console.log("Activity 5: Enhanced Object Literals");

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name1 = "Enhanced Object";
const version1 = "ES6+";
const enhancedObject = {
  name1,
  version1,
  greet() {
    console.log(`Hello, this is ${this.name1} version ${this.version1}`);
  },
};

console.log(enhancedObject);
enhancedObject.greet();

console.log();
// Task 9: Create an object with computed property names based on variables and log the object to the console.
let propName = "dynamicKey";
const version2 = "ES6+";
const computedObject = {
  [propName]: version2,
  greet() {
    console.log(`Hello, this is ${this[propName]}`);
  },
};
console.log(computedObject);
computedObject.greet();


