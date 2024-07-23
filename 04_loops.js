// Tasks/Activities:

console.log("Activity 1: For Loop");

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log();
for (let index = 1; index <= 10; index++) {
  console.log(`5 X ${index} = ${5 * index}`);
}

console.log("Activity 2: While Loop");

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let index = 1;
let sum = 0;
while (index <= 10) {
  sum += index;
  index++;
}
console.log(`Sum of numbers from 1 to 10 is: ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log();
let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

console.log("Activity 3: Do... While Loop");

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
console.log();
let factorial = 1;
let num = 5;
do {
  factorial *= num;
  num--;
} while (num > 0);
console.log(factorial);

console.log("Activity 4: Nested Loops");

// Task 7: Write a program to print a pattern using nested for loops:
/*

 *
 * *
 * * *
 * * * *
 * * * * *
 
 */

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}
