// Day 16: Recursion
console.log("Activity 1: Basic Recursion");

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log("End of Task 1\n");

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n <= 1) return n; // Base cases
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(0)); // 0
console.log("End of Task 2\n");

console.log("Activity 2: Recursion with Arrays");

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) return 0; // Base case
  return arr[0] + sumArray(arr.slice(1)); // Recursive case
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, -10, 20, -20])); // 0
console.log(sumArray([])); // 0
console.log("End of Task 3\n");

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
  if (arr.length === 1) return arr[0]; // Base case
  const maxOfRest = maxArray(arr.slice(1)); // Recursive call
  return arr[0] > maxOfRest ? arr[0] : maxOfRest; // Compare and return
}
console.log(maxArray([1, 3, 5, 2, 4])); // 5
console.log(maxArray([10, 10, 10])); // 10
console.log(maxArray([-1, -3, -5, -2, -4])); // -1
console.log("End of Task 4\n");

console.log("Activity 3: String Manipulation with Recursion");

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str === "") return ""; // Base case
  return reverseString(str.slice(1)) + str[0]; // Recursive case
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("")); // ""
console.log("End of Task 5\n");

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) return true; // Base case
  if (str[0] !== str[str.length - 1]) return false; // Mismatch found
  return isPalindrome(str.slice(1, -1)); // Recursive case
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true
console.log("End of Task 6\n");

console.log("Activity 4: Recursive Search");

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1; // Base case: target not found
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid; // Target found
  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1); // Search left
  return binarySearch(arr, target, mid + 1, high); // Search right
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log("End of Task 7\n");

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) return 0; // Base case
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target); // Recursive case
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3
console.log(countOccurrences([1, 1, 1, 1], 1)); // 4
console.log(countOccurrences([1, 2, 3, 4], 5)); // 0
console.log("End of Task 8\n");

console.log("Activity 5: Tree Traversal (Optional)");

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function inorderTraversal(root) {
  if (root === null) return; // Base case
  inorderTraversal(root.left); // Visit left subtree
  console.log(root.value); // Visit node
  inorderTraversal(root.right); // Visit right subtree
}

// Sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inorderTraversal(root); // 4 2 5 1 3
console.log("End of Task 9\n");

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(root) {
  if (root === null) return 0; // Base case
  return 1 + Math.max(treeDepth(root.left), treeDepth(root.right)); // Recursive case
}
console.log(treeDepth(root)); // 3
console.log("End of Task 10\n");
