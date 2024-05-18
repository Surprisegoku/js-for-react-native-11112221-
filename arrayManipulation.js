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

 
//Task 2
function formatArrayStrings(strings, numbers) {
  // Ensure both arrays have the same length
  if (strings.length !== numbers.length) {
      throw new Error("Both arrays must have the same length.");
  }

  return strings.map((str, index) => {
      const num = numbers[index];
      if (num % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}

// Example :
const strings = ["Hi", "Goku", "Surprise", "Is", "Best"];
const values = processArray([1, 2, 3, 4, 5, ]);
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); // Output: ["hi", "Goku", "surprise", "is", "BEST"]
