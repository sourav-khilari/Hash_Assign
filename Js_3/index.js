// Q1) Create an array of states in India. Remove all names starting with vowels using array.filter.
const states = [
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Haryana",
  "Kerala",
  "Uttar Pradesh",
  "Uttarakhand",
  "Odisha",
  "Rajasthan",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Karnataka",
  "Maharashtra",
  "Jharkhand",
  "Mizoram",
  "Punjab",
  "Sikkim",
  "West Bengal",
  "Nagaland",
  "Telangana",
  "Manipur",
  "Meghalaya"
];

const consonantStates = states.filter(
  (state) => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase())
);

console.log("States after removing those starting with vowels:", consonantStates);
console.log("Q1");


// Q2) Reverse the words in the string 'I love my India' to get 'India my love I'.
let str = "I love my India";
let reversedWords = str.split(" ").reverse().join(" ");
console.log("Reversed words:", reversedWords);
console.log("Q2");


// Q3) Change 'INDIA' to 'INDONESIA' using array.splice.
let countryArr = Array.from("INDIA"); 
// ["I","N","D","I","A"]
// We want to insert "ONE S" between "D" and "I": 
// current arr: ['I','N','D','I','A']
// index of second 'I' is 3, so splice at index 3
countryArr.splice(3, 0, ..."ONES"); 

let newCountry = countryArr.join("");
console.log("Transformed string:", newCountry);
console.log("Q3");


// Q4) Take any string ≥ 20 chars. Count number of consonants and vowels.
let sampleText = "The quick brown fox jumps over"; 
// length is 27
let vowelsCount = 0;
let consonantsCount = 0;
for (let char of sampleText.toLowerCase()) {
  if (/[a-z]/.test(char)) {
    if (/[aeiou]/.test(char)) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }
}
console.log(`In "${sampleText}": Vowels = ${vowelsCount}, Consonants = ${consonantsCount}`);
console.log("Q4");


// Q5) Function to replace a wrong word with a correct word in any sentence.
function correctfn(sentence, wrong, correct) {
  // Using a global, case-sensitive replace for simplicity:
  return sentence.replace(new RegExp(wrong, "g"), correct);
}

let originalSentence = "I have a wrongg word in this wrongg sentence.";
let fixedSentence = correctfn(originalSentence, "wrongg", "wrong");
console.log("Before:", originalSentence);
console.log("After: ", fixedSentence);
console.log("Q5");


// Q6) inputArr = [1,2,3,9,10,7,5,4,3] → return numbers > 5 using array.filter.
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const greaterThanFive = inputArr.filter((num) => num > 5);
console.log("Numbers greater than 5:", greaterThanFive);
console.log("Q6");


// Q7) Given students with scores array, compute average for each using array.map and array.reduce.
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const studentsWithAverages = students.map((student) => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const average = total / student.scores.length;
  return { name: student.name, average };
});

console.log("Students with averages:", studentsWithAverages);
console.log("Q7");


// Q8) Function to find repeated sum of digits until a single digit remains.
function digitalRoot(num) {
  let sum = num;
  while (sum > 9) {
    sum = String(sum)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  }
  return sum;
}

console.log("Digital root of 456:", digitalRoot(456)); // 6
console.log("Digital root of 9999:", digitalRoot(9999)); // 9
console.log("Q8");


// Q9) Function to count the number of words in a paragraph.
function countWords(paragraph) {
  // Split on one or more whitespace characters
  const words = paragraph.trim().split(/\s+/);
  return words.filter((w) => w.length > 0).length;
}

let paragraph =
  "  This is a sample paragraph to count how many words are present.   ";
console.log(
  "Word count:",
  countWords(paragraph)
); // Expected output: 11
console.log("Q9");


// Q10) Function to reverse a string. Input: "Hello" → Output: "olleH"
function reverseString(s) {
  return s.split("").reverse().join("");
}

console.log("Reverse of 'Hello':", reverseString("Hello")); // "olleH"
console.log("Q10");


// Q11) Given an object of students with subject marks, compute each student’s average.
const studentScores = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

const averagesResult = {};
Object.entries(studentScores).forEach(([student, subjects]) => {
  const marks = Object.values(subjects);
  const totalMarks = marks.reduce((sum, m) => sum + m, 0);
  const averageMark = totalMarks / marks.length;
  averagesResult[student] = { average: averageMark };
});

console.log("Averages per student:", averagesResult);
console.log("Q11");
