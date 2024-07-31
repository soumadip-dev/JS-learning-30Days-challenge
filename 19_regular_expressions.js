//Day 19: Regular Expressions
console.log("Activity 1: Basic Regular Expressions");

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let text1 = "JavaScript is a popular language. Many love JavaScript!";
let regex1 = /JavaScript/g;
let matches1 = text1.match(regex1);
console.log(matches1);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
let text2 = "The year 2024 marks the end of the decade.";
let regex2 = /\d/g;
let matches2 = text2.match(regex2);
console.log(matches2);

console.log("Activity 2: Character Classes and Quantifiers");

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let text3 = "Apple is a fruit. John is a name.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = text3.match(regex3);
console.log(matches3);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let text4 = "The numbers are 123, 4567, and 890.";
let regex4 = /\d+/g;
let matches4 = text4.match(regex4);
console.log(matches4);

console.log("Activity 3: Grouping and Capturing");

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let text5 = "(123) 456-7890";
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches5 = text5.match(regex5);
console.log(matches5);

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let text6 = "user@example.com";
let regex6 = /(\w+)@([\w.]+)/;
let matches6 = text6.match(regex6);
console.log(matches6);

console.log("Activity 4: Assertions and Boundaries");

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let text7 = "Start here. And continue.";
let regex7 = /^\w+/;
let matches7 = text7.match(regex7);
console.log(matches7);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let text8 = "Finish this sentence.";
let regex8 = /\w+$/;
let matches8 = text8.match(regex8);
console.log(matches8);

console.log("Activity 5: Practical Applications");

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password = "Passw0rd!";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let isValidPassword = regex9.test(password);
console.log(isValidPassword);

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let url = "https://www.example.com";
let regex10 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
let isValidURL = regex10.test(url);
console.log(isValidURL);
