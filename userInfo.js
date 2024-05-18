// Task 1
function processArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

// Task 2
function formatArrayStrings(strings, numbers) {
  if (strings.length !== numbers.length) {
      throw new Error("Both arrays must have the same length.");
  }

  return strings.map((str, index) => {
      const num = numbers[index];
      return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}

// Task 3, Creating user profiles by taking an array of names and modified names from task 2
function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
      throw new Error("Both arrays must have the same length.");
  }

  return names.map((name, index) => ({
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
  }));
}

// Example :
const names = ["Goku", "Surprise", "Elorm", "James", "Mohammed"];
const numbers = processArray([1, 2, 3, 4, 5]);
const modifiedNames = formatArrayStrings(names, numbers);
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: "Goku", modifiedName: "goku" },
//   { id: 2, originalName: "Surprise", modifiedName: "SURPRISE" },
//   { id: 3, originalName: "Elorm", modifiedName: "elorm" },
//   { id: 4, originalName: "Faisal", modifiedName: "FAISAL" },
//   { id: 5, originalName: "Mohammed", modifiedName: "mohammed" }
// ]
