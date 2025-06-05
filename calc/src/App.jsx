import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    setError("");

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b === 0) {
          setError("Cannot divide by zero.");
          setResult(null);
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Simple Calculator</h1>
      <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg flex items-center justify-center">

      <div className="flex flex-col gap-4 ">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between mt-2">
          <button onClick={() => handleCalculation("+")} className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">
            +
          </button>
          <button onClick={() => handleCalculation("-")} className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
            -
          </button>
          <button onClick={() => handleCalculation("*")} className="bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 rounded">
            ×
          </button>
          <button onClick={() => handleCalculation("/")} className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded">
            ÷
          </button>
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 text-blue-800 font-semibold border border-blue-300 rounded">
            Result: {result}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default App;
