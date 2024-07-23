// Day 5: Functions
console.log("Activity 1: Function Declaration");

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}
isEvenOrOdd(5);

// Task 2: Write a function to calculate the square of a number and return the result.
function getSquare(number) {
  return number * number;
}
console.log(getSquare(6));

console.log();
console.log("Activity 2: Function Expression");

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const getMaxNumber = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
};
getMaxNumber(5, 6);

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenateStrings("Hello ", "World"));

console.log();
console.log("Activity 3: Arrow Functions");

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(5, 6));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const doesContainCharacter = (str, char) => str.includes(char);
console.log(doesContainCharacter("Soumadip", "i"));

console.log();
console.log("Activity 4: Function Parameters and Default Values");

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiplyNumbers(num1, num2 = 10) {
  return num1 * num2;
}
console.log(multiplyNumbers(5));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function getGreetingMessage(name, age = 21) {
  return `Hello ${name}, you are ${age} years old.`;
}
console.log(getGreetingMessage("Soumadip"));

console.log();
console.log("Activity 5: Higher-Order Functions");

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const callFunctionMultipleTimes = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};
const printHello = () => {
  console.log("Hello");
};
callFunctionMultipleTimes(printHello, 4);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const applyTwoFunctions = (func1, func2, value) => {
  const intermediateResult = func1(value);
  const finalResult = func2(intermediateResult);
  return finalResult;
};
const doubleNumber = (x) => x * 2;
const squareNumber = (x) => x * x;
const result = applyTwoFunctions(doubleNumber, squareNumber, 5);
console.log(result); // Output will be 100


