const add = require("./math");
const person = require("./person");
const { multiply, divide } = require("./utils");
const greet = require("./greetings");
const constants = require("./constants");

console.log(add(5, 3)); // Output: 8
console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, I'm John Doe!
console.log(multiply(4, 3)); // Output: 12
console.log(divide(10, 2)); // Output: 5
greet("Alice"); // Output: Hello, Alice!
console.log(constants.PI); // Output: 3.14
console.log(constants.square(4)); // Output: 16
