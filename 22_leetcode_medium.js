// Day 22: LeetCode Medium

console.log("Activity 1: Add Two Numbers");
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. Create a few test cases with linked lists and log the sum as a linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = BigInt(recursivelySumList(l1)) + BigInt(recursivelySumList(l2));
  sum += "";
  return new ListNode(
    BigInt(sum[sum.length - 1]),
    recursivelyBuildNode(sum, sum.length - 1),
    10
  );
};

var recursivelySumList = function (l1) {
  if (l1.next) {
    return recursivelySumList(l1.next) + "" + l1.val;
  } else {
    return l1.val;
  }
};

var recursivelyBuildNode = function (l1, index) {
  if (index > 0) {
    index--;
    return new ListNode(l1[index], recursivelyBuildNode(l1, index));
  }
  return undefined;
};

console.log("Activity 2: Longest Substring Without Repeating Characters");
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let count = new Array(256).fill(0);
  for (let i = 0, j = 0; i < s.length; i++) {
    count[s.charCodeAt(i)]++;
    while (count[s.charCodeAt(i)] > 1) {
      count[s.charCodeAt(j++)]--;
    }
    ans = Math.max(ans, i - j + 1);
  }
  return ans;
};

console.log("Activity 3: Container With Most Water");
// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water. Log the maximum amount of water for a few test cases.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

console.log("Activity 4: 3Sum");
// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero. Log the triplets for a few test cases, including edge cases.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let out = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      let res = sorted[i] + sorted[left] + sorted[right];
      if (res === 0) {
        out.push([sorted[i], sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) left++;
        while (left < right && sorted[right] === sorted[right - 1]) right--;
        left++;
        right--;
      } else if (res > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return out;
};

console.log("Activity 5: Group Anagrams");
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together. Log the grouped anagrams for a few test cases.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  for (let str of strs) {
    let s = str.split("").sort().join("");
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }
  return Object.values(map);
};
