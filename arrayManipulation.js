//Task 1
function processArray(arr) {
  // Map through each element in the array
  return arr.map(num => {
      if (num % 2 === 0) {
          return num * num;
      } else {
          return num * 3;
      }
  });
}

// Example :
const numbers = [3, 4, 5, 7, 8];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [9, 16, 15, 21, 64]