import { add, subtract, multiply, divide } from './math.utils';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

// To run tests, use the command: npx jest math.utils.test.js
// Ensure Jest is installed in your project dependencies