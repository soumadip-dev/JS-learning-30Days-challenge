// Day 6: Arrays

console.log("Activity 1: Array Creation and Access");

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numberArray = [1, 2, 3, 4, 5];
console.log(`The array: ${numberArray}`);

// Task 2: Access the first and last elements of the array and log them to the console.
const firstElement = numberArray[0];
const lastElement = numberArray[numberArray.length - 1];
console.log(`The first element of the array is: ${firstElement}`);
console.log(`The last element of the array is: ${lastElement}`);

console.log();
console.log("Activity 2: Array Methods (Basic)");

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numberArray.push(6);
console.log(`Updated Array after adding an element at the end: ${numberArray}`);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numberArray.pop();
console.log(`Updated Array after removing the last element: ${numberArray}`);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numberArray.shift();
console.log(`Updated Array after removing the first element: ${numberArray}`);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numberArray.unshift(1);
console.log(
  `Updated Array after adding an element at the beginning: ${numberArray}`
);

console.log();
console.log("Activity 3: Array Methods (Intermediate)");

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledArray = numberArray.map((num) => num * 2);
console.log(`Array with each element doubled: ${doubledArray}`);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbersArray = numberArray.filter((num) => num % 2 === 0);
console.log(`Array with only even numbers: ${evenNumbersArray}`);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sumOfArray = numberArray.reduce((sum, current) => sum + current, 0);
console.log(`Sum of all elements in the array: ${sumOfArray}`);

console.log();
console.log("Activity 4: Array Iteration");

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Iterating over the array using a for loop:");
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

console.log();
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Iterating over the array using forEach method:");
numberArray.forEach((num) => console.log(num));

console.log();
console.log("Activity 5: Multi-dimensional Arrays");

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Two-dimensional array (matrix):");
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][2];
console.log(`Accessing element at row 1, column 2: ${specificElement}`);
