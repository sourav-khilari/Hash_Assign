// 1. Display even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


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

console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "-")); 
console.log(calculate(10, 5, "*")); 
console.log(calculate(10, 5, "/")); 

// 3. Function to find tax based on salary using switch
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

console.log(findTax(400000)); 
console.log(findTax(750000)); 
console.log(findTax(1250000));
console.log(findTax(2000000));

// 4. Function to find sum of the products of corresponding digits of two numbers
function sumProductDigits(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    const digit1 = n1 % 10;
    const digit2 = n2 % 10;
    sum += digit1 * digit2;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  return sum;
}

console.log(sumProductDigits(6, 34));   
console.log(sumProductDigits(123, 45)); 
