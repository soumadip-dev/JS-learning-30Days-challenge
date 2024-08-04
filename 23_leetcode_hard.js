// Day 23: LeetCode Hard

console.log("Activity 1: Median of Two Sorted Arrays");
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays. Log the median for a few test cases, including edge cases.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

console.log("Activity 2: Merge k Sorted Lists");
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let answerList = null;

  for (let i = 0; i < lists.length; i++) {
    answerList = merge(answerList, lists[i]);
  }

  return answerList;
};

let merge = function (list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  if (list1.val < list2.val) {
    list1.next = merge(list1.next, list2);
    return list1;
  } else {
    list2.next = merge(list1, list2.next);
    return list2;
  }
};

console.log("Activity 3: Trapping Rain Water");
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0;
  let left_max = height[0];
  let sum = 0;
  let j = height.length - 1;
  let right_max = height[j];
  while (i < j) {
    if (left_max <= right_max) {
      sum += left_max - height[i];
      i++;
      left_max = Math.max(left_max, height[i]);
    } else {
      sum += right_max - height[j];
      j--;
      right_max = Math.max(right_max, height[j]);
    }
  }
  return sum;
};

console.log("Activity 4: N-Queens");
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an n×n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n === 1) {
    return [["Q"]];
  }
  if (n == 2 || n === 3) {
    return [];
  }
  let results = [];
  let solution = Array(n).fill(-1);
  solveNQueensRec(n, solution, 0, results);
  return results;
};

// Recursive worker function
function solveNQueensRec(n, solution, row, results) {
  if (row == n) {
    const solutionStr = constructSolutionString(solution);
    results.push(solutionStr);
    return;
  }

  for (let i = 0; i < n; i++) {
    let valid = isValidMove(row, i, solution);
    if (valid) {
      solution[row] = i;
      solveNQueensRec(n, solution, row + 1, results);
    }
  }
}

// this method determines if a queen can be placed at
// proposedRow, proposedCol with current solution i.e.
// this move is valid only if no queen in current
// solution may attack the square at proposedRow and
// proposedCol
function isValidMove(proposedRow, proposedCol, solution) {
  for (let i = 0; i < proposedRow; i++) {
    let oldRow = i,
      oldCol = solution[i],
      diagonalOffset = proposedRow - oldRow;

    if (
      oldCol == proposedCol ||
      oldCol == proposedCol - diagonalOffset ||
      oldCol == proposedCol + diagonalOffset
    ) {
      return false;
    }
  }
  return true;
}

function constructSolutionString(solution) {
  const returnArr = [];
  for (i = 0; i < solution.length; i++) {
    const returnStr = Array(solution.length).fill(".");
    returnStr[solution[i]] = "Q";
    returnArr.push(returnStr.join(""));
  }
  return returnArr;
}

console.log("Activity 5: Word Ladder");
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    // loop over each word in the queue
    for (let word of queue) {
      if (word === endWord) return steps;

      // loop over each char of the word
      for (let i = 0; i < word.length; i++) {
        // and replace the char with letters from [a - z]
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

          // if the new word exist in the word list add it to the queue
          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps++;
  }
  return 0;
};
