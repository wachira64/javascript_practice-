const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// bubble sort
function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// binary search
function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Ask user for the numbers
rl.question("Enter your numbers separated by spaces: ", (input) => {
  const arr = input.trim().split(/[ ,]+/).filter(Boolean).map(Number);

  if (arr.length === 0 || arr.some(n => Number.isNaN(n))) {
    console.log("Invalid input. Example: 5 3 8 2 or 5,3,8,2");
    rl.close();
    return;
  }

  console.log("Original array:", arr);

  // Sort in place
  bubble(arr);
  console.log("Sorted array:", arr);

  // Ask for a number to search
  rl.question("Enter the number you are looking for: ", (targetInput) => {
    const target = Number(targetInput.trim());
    if (Number.isNaN(target)) {
      console.log("Invalid target. Please enter a number.");
      rl.close();
      return;
    }

    const result = search(arr, target);
    if (result !== -1) {
      console.log(`Target found at index ${result} (0-based)`);
    } else {
      console.log("Target not found");
    }

    rl.close();
  });
});
