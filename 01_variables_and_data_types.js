// Activity 1: Variable Declaration
var number = 30;
console.log(number);

let name = "Soumadip";
console.log(name);

// Activity 2: Constant Declaration
const isTrue = true;
console.log(isTrue);

// Activity 3: Data Types
let integer = 50;
console.log(`Data type of ${integer} is ${typeof integer}`);

let string = "Hello World";
console.log(`Data type of ${string} is ${typeof string}`);

let boolean = true;
console.log(`Data type of ${boolean} is ${typeof boolean}`);

let object = {
  name: "Soumadip",
  age: 20,
};
console.log(`Data type of ${object} is ${typeof object}`);

let array = [5, "Soumadip", true, 5.9];
console.log(`Data type of ${array} is ${typeof array}`);

// Activity 4: Reassign new value
let variable = 6;
console.log(`Old value: ${variable}`);
variable = "Hello";
console.log(`Updated value after reassigning: ${variable}`);

// Activity 5: Understanding const
const constantValue = 5;
// constantValue = 6; // Error: TypeError: Assignment to constant variable.
