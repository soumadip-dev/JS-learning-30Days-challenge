// Day 21: LeetCode Easy

console.log("Activity 1: Two Sum");
// Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// • Log the indices for a few test cases.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indexLength = nums.length;

  for (let i = 0; i < indexLength; i++) {
    for (let j = i + 1; j < indexLength; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log("Activity 2: Reverse Integer");
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let value =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);

  if (value > Math.pow(2, 31) - 1 || value < Math.pow(-2, 31)) {
    return 0;
  } else {
    return value;
  }
};

console.log("Activity 3: Palindrome Number");
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let temp = x;
  let reversedNum = 0;

  while (temp >= 1) {
    let digit = Math.floor(temp % 10);
    reversedNum = Math.floor(reversedNum * 10 + digit);
    temp = Math.floor(temp / 10);
  }

  if (x === reversedNum) {
    return true;
  }
  return false;
};

console.log("Activity 4: Merge Two Sorted Lists");
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// • Create a few test cases with linked lists and log the merged list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }
    cur = cur.next;
  }

  cur.next = list1 || list2;

  return dummy.next;
};

console.log("Activity 5: Valid Parentheses");
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};
