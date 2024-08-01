// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:

console.log("Activity 1: Understanding LocalStorage");

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("myString", "Hello, LocalStorage!");
console.log(localStorage.getItem("myString"));

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = { name: "John Doe", age: 30 };
localStorage.setItem("myObject", JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(retrievedObject);

console.log("Activity 2: Using LocalStorage");

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  if (savedName && savedEmail) {
    console.log(`Name: ${savedName}, Email: ${savedEmail}`);
  }
});

function saveToLocalStorage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
}

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log('Before removal:', localStorage);
localStorage.removeItem('name');
console.log('After removal:', localStorage);

console.log("Activity 3: Understanding SessionStorage");

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("sessionString", "Hello, SessionStorage!");
console.log(sessionStorage.getItem("sessionString"));

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const sessionObject = { product: "Laptop", price: 1200 };
sessionStorage.setItem("sessionObject", JSON.stringify(sessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem("sessionObject"));
console.log(retrievedSessionObject);

console.log("Activity 4: Using SessionStorage");

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.addEventListener('DOMContentLoaded', () => {
  const savedSessionName = sessionStorage.getItem('sessionName');
  const savedSessionEmail = sessionStorage.getItem('sessionEmail');
  if (savedSessionName && savedSessionEmail) {
    console.log(`Name: ${savedSessionName}, Email: ${savedSessionEmail}`);
  }
});

function saveToSessionStorage() {
  const name = document.getElementById('sessionName').value;
  const email = document.getElementById('sessionEmail').value;
  sessionStorage.setItem('sessionName', name);
  sessionStorage.setItem('sessionEmail', email);
}

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log('Before removal:', sessionStorage);
sessionStorage.removeItem('sessionName');
console.log('After removal:', sessionStorage);

console.log("Activity 5: Comparing LocalStorage and SessionStorage");

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(`localStorage: ${localStorage.getItem(key)}`);
  console.log(`sessionStorage: ${sessionStorage.getItem(key)}`);
}

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAllStorages() {
  localStorage.clear();
  sessionStorage.clear();
  console.log('localStorage:', localStorage);
  console.log('sessionStorage:', sessionStorage);
}
