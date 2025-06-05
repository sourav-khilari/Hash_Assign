// 1. Display even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Sample console output (first few evens): 2 4 6 8 10 …

// 2. Function that can add, subtract, multiply, or divide two numbers using switch
function calculate(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      // Handle division by zero
      if (b === 0) {
        return "Error: Division by zero";
      }
      result = a / b;
      break;
    default:
      return "Invalid operator. Use '+', '-', '*', or '/'.";
  }
  return result;
}
// Examples:
console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2

// 3. Function findTax() using switch to calculate tax on salary
function findTax(salary) {
  let taxRate;
  switch (true) {
    case salary > 1500000:
      taxRate = 0.30;
      break;
    case salary > 1000000:
      taxRate = 0.20;
      break;
    case salary > 500000:
      taxRate = 0.10;
      break;
    case salary >= 0:
      taxRate = 0;
      break;
    default:
      return "Invalid salary.";
  }
  return salary * taxRate;
}
// Examples:
console.log(findTax(400000));  // 0 (0%)
console.log(findTax(750000));  // 75000 (10% of 750,000)
console.log(findTax(1250000)); // 250000 (20% of 1,250,000)
console.log(findTax(2000000)); // 600000 (30% of 2,000,000)

// 4. Function to find sum of the products of corresponding digits of two numbers
function sumProductDigits(n1, n2) {
  let sum = 0;
  // Process least significant digits first
  while (n1 > 0 || n2 > 0) {
    const digit1 = n1 % 10;
    const digit2 = n2 % 10;
    sum += digit1 * digit2;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  return sum;
}
// Examples:
console.log(sumProductDigits(6, 34));   // (6*4)+(0*3) = 24
console.log(sumProductDigits(123, 45)); // (3*5)+(2*4)+(1*0) = 15 + 8 + 0 = 23
