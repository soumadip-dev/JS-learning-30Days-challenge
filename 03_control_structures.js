// Day 3: Control Structures

console.log("Activity 1: If-Else Statements--");

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const num = 2;
if (num > 0) {
  console.log(`${num} is a positive number.`);
} else if (num < 0) {
  console.log(`${num} is a negative number.`);
} else {
  console.log(`${num} is zero.`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 15;
if (age >= 18) {
  console.log(`Age ${age}: Eligible to vote.`);
} else {
  console.log(`Age ${age}: Not eligible to vote.`);
}

console.log("Activity 2: Nested If-Else Statements--");

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 5;
let num2 = 8;
let num3 = 7;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is the largest number.`);
  } else {
    console.log(`${num3} is the largest number.`);
  }
} else {
  if (num2 > num3) {
    console.log(`${num2} is the largest number.`);
  } else {
    console.log(`${num3} is the largest number.`);
  }
}

console.log("Activity 3: Switch Case--");

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 80;
switch (true) {
  case score >= 90 && score <= 100:
    console.log("A");
    break;
  case score >= 80 && score < 90:
    console.log("B");
    break;
  case score >= 70 && score < 80:
    console.log("C");
    break;
  case score >= 60 && score < 70:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

console.log("Activity 4: Conditional (Ternary) Operator--");

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 10;
console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`);

console.log("Activity 5: Combining Conditions--");

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
