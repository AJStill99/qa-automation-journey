// try-catch-practice.js

function divideNumbers(a, b) {
  try {
    console.log(`Trying to divide ${a} by ${b}...`);

    if (typeof a !== "number" || typeof b !== "number") {
      // Throw an error if inputs aren't numbers
      throw new Error("Both inputs must be numbers!");
    }

    if (b === 0) {
      throw new Error("You can't divide by zero!");
    }

    const result = a / b;
    console.log(`✅ Success: ${a} ÷ ${b} = ${result}`);
  } catch (error) {
    console.error(`❌ Error caught: ${error.message}`);
  } finally {
    console.log("↩️ Moving on...\n");
  }
}

// Example 1: works fine
divideNumbers(10, 2);

// Example 2: division by zero error
divideNumbers(5, 0);

// Example 3: invalid input type
divideNumbers("ten", 2);
