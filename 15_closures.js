// Day 15: Closures

console.log("Activity 1: Understanding Closures");

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    var outerVariable = "I am from outer function";
    function innerFunction() {
        return outerVariable;
    }
    return innerFunction;
}

var result = outerFunction();
console.log(result()); // Output: "I am from outer function"

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    var counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

var counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

console.log("Activity 2: Practical Closures");

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
    var lastID = 0;
    return function() {
        lastID++;
        return lastID;
    };
}

var generateID = createIDGenerator();
console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeting(name) {
    return function() {
        return "Hello, " + name + "!";
    };
}

var greetJohn = createGreeting("John");
console.log(greetJohn()); // Output: "Hello, John!"

console.log("Activity 3: Closures in Loops");

// Task 5: Write a loop that creates an array of functions. Each function should log its Index when called. Use a closure to ensure each function logs the correct index.
var functionsArray = [];
for (var i = 0; i < 5; i++) {
    (function(index) {
        functionsArray.push(function() {
            console.log(index);
        });
    })(i);
}

functionsArray[0](); // Output: 0
functionsArray[1](); // Output: 1
functionsArray[2](); // Output: 2
functionsArray[3](); // Output: 3
functionsArray[4](); // Output: 4

console.log("Activity 4: Module Pattern");

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
var itemManager = (function() {
    var items = [];
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            var index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    };
})();

itemManager.addItem("Item 1");
itemManager.addItem("Item 2");
console.log(itemManager.listItems()); // Output: ["Item 1", "Item 2"]
itemManager.removeItem("Item 1");
console.log(itemManager.listItems()); // Output: ["Item 2"]

console.log("Activity 5: Memoization");

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    var cache = {};
    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        } else {
            var result = fn(arg);
            cache[arg] = result;
            return result;
        }
    };
}

function square(n) {
    return n * n;
}

var memoizedSquare = memoize(square);
console.log(memoizedSquare(5)); // Output: 25
console.log(memoizedSquare(5)); // Output: 25 (cached)


// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

var memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached)
