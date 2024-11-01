// Day 18: Algorithms
console.log("Activity 1: Sorting Algorithms");

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array. 
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Bubble Sort:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log("Selection Sort:", selectionSort([64, 34, 25, 12, 22, 11, 90]));

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort:", quickSort([64, 34, 25, 12, 22, 11, 90]));

console.log("Activity 2: Searching Algorithms");

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Target not found
}

console.log("Linear Search:", linearSearch([64, 34, 25, 12, 22, 11, 90], 25));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Target not found
}

console.log("Binary Search:", binarySearch([11, 12, 22, 25, 34, 64, 90], 25));

console.log("Activity 3: String Algorithms");

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacters(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

console.log("Character Counts:", countCharacters("hello world"));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestUniqueSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let seen = {};
    for (let i = 0; i < str.length; i++) {
        if (seen[str[i]] !== undefined && seen[str[i]] >= start) {
            start = seen[str[i]] + 1;
        }
        seen[str[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

console.log("Longest Unique Substring Length:", longestUniqueSubstring("abcabcbb"));

console.log("Activity 4: Array Algorithms");

// Task 8: Write a function to rotate an array by x positions. Log the rotated array.
function rotateArray(arr, x) {
    let n = arr.length;
    x = x % n; // In case x is greater than array length
    return [...arr.slice(-x), ...arr.slice(0, n - x)];
}

console.log("Rotated Array:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

console.log("Merged Array:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));

console.log("Activity 5: Dynamic Programming (Optional)");

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log("Fibonacci Sequence:", fibonacci(10));

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

console.log("Knapsack Maximum Value:", knapsack([60, 100, 120], [10, 20, 30], 50));
