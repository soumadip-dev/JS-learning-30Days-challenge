// Day 12: Error Handling

console.log("Activity 1: Basic Error Handling with Try-Catch");

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("This is an intentional error.");
}

try {
  throwError();
} catch (error) {
  console.log("Caught an error: " + error.message);
}

console.log();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

try {
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.log("Error: " + error.message);
}

console.log();
console.log("Activity 2: Finally Block");

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  console.log("In the try block.");
  // Intentionally causing an error
  let result = 10 / 0;
} catch (error) {
  console.log("Caught an error in the catch block.");
} finally {
  console.log("This is the finally block, always executed.");
}

console.log();
console.log("Activity 3: Custom Error Objects");

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error.");
} catch (error) {
  console.log("Caught a custom error: " + error.name + " - " + error.message);
}

console.log();

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
  if (input.trim() === "") {
    throw new CustomError("Input cannot be empty.");
  }
  console.log("Valid input: " + input);
}

try {
  validateInput("");
} catch (error) {
  console.log("Validation error: " + error.message);
}

console.log();
console.log("Activity 4: Error Handling in Promises");

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve("Promise resolved!");
      } else {
        reject("Promise rejected.");
      }
    }, 1000);
  });
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Caught in .catch: " + error);
  });

console.log();

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handlePromise() {
  try {
    let result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.log("Caught in async function: " + error);
  }
}
handlePromise();
console.log();
console.log("Activity 5: Graceful Error Handling in Fetch");

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.
fetch("https://invalid.url")
  .then((response) => response.json())
  .catch((error) => {
    console.log("Fetch error: " + error.message);
  });

console.log();

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
  try {
    let response = await fetch("https://invalid.url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error in async function: " + error.message);
  }
}
fetchData();
