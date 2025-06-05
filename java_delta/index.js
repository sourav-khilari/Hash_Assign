
// Question 1:
// Write a JavaScript function that declares a variable using let, const, and var.
// What is the difference in scope for each?

function demoVariableScopes() {
  // var is function-scoped
  if (true) {
    var x = "I am var";
  }
  console.log("Inside demoVariableScopes – x (var):", x); 
  // → "I am var"

  // let is block-scoped
  if (true) {
    let y = "I am let";
    console.log("Inside demoVariableScopes – y (let):", y);
    // → "I am let"
  }
  // console.log(y); // would throw ReferenceError

  // const is block-scoped (and cannot be reassigned)
  if (true) {
    const z = "I am const";
    console.log("Inside demoVariableScopes – z (const):", z);
    // → "I am const"
    // z = "new value"; // would throw TypeError
  }
  // console.log(z); // would throw ReferenceError
}
demoVariableScopes();
console.log("Question 1: demoVariableScopes() executed.\n");



// Question 2:
// Create an array called fruits that contains five different fruit names.
// Write a function that returns the second fruit in the array.

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit(arr) {
  return arr[1];
}

console.log("Question 2: Second fruit is", getSecondFruit(fruits), "\n");



// Question 3:
// Write a function that takes an array as an argument, adds a new element to the end of the array using push(),
// and then removes the last element using pop(). Return the modified array.

function pushThenPop(arr, newElement) {
  arr.push(newElement);
  arr.pop();
  return arr;
}

const sampleArr3 = [1, 2, 3];
console.log("Question 3: After pushThenPop:", pushThenPop(sampleArr3, 999), "\n");
// (Original array was [1,2,3]; after push and pop, remains [1,2,3])



// Question 4:
// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

function squareNumbers(arr) {
  return arr.map((num) => num * num);
}

const nums4 = [2, 4, 6, 8];
console.log("Question 4: Squared numbers:", squareNumbers(nums4), "\n");
// → [4, 16, 36, 64]


// Question 5:
// Write a function that filters out all even numbers from an array of numbers using the filter() method.
// Return the new array of odd numbers.

function filterOddNumbers(arr) {
  return arr.filter((n) => n % 2 !== 0);
}

const nums5 = [1, 2, 3, 4, 5, 6, 7];
console.log("Question 5: Odd numbers:", filterOddNumbers(nums5), "\n");
// → [1, 3, 5, 7]


// Question 6:
// Create an object called person with properties for name, age, and occupation.
// Write a function that logs a greeting message using these properties.

const person = {
  name: "Alice",
  age: 30,
  occupation: "Software Developer",
};

function greetPerson(p) {
  console.log(
    `Hello, my name is ${p.name}. I am ${p.age} years old and I work as a ${p.occupation}.`
  );
}

console.log("Question 6:");
greetPerson(person);
console.log(""); // blank line



// Question 7:
// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

function calculateArea(dimensions) {
  return dimensions.width * dimensions.height;
}

const rect7 = { width: 5, height: 10 };
console.log("Question 7: Rectangle area is", calculateArea(rect7), "\n");
// → 50



// Question 8:
// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

function getObjectKeys(obj) {
  return Object.keys(obj);
}

const sampleObj8 = { color: "red", size: "medium", quantity: 42 };
console.log("Question 8: Object keys are", getObjectKeys(sampleObj8), "\n");
// → ["color", "size", "quantity"]



// Question 9:
// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const a9 = { name: "Bob", age: 25 };
const b9 = { occupation: "Designer", age: 26 };
console.log("Question 9: Merged object is", mergeObjects(a9, b9), "\n");
// → { name: "Bob", age: 26, occupation: "Designer" }



// Question 10:
// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const nums10 = [5, 10, 15, 20];
console.log("Question 10: Sum of array is", sumArray(nums10), "\n");
// → 50
