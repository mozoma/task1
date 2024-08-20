const { calculator } = require('./calculator'); // Ensure the path is correct

// Basic Operations
test('should return 10 when adding 6 and 4', () => {
  expect(calculator(6, 4, "+")).toBe(10);
});

test('should return 2 when subtracting 6 from 8', () => {
  expect(calculator(8, 6, "-")).toBe(2);
});

test('should return 12 when multiplying 3 and 4', () => {
  expect(calculator(3, 4, "*")).toBe(12);
});

test('should return 3 when dividing 9 by 3', () => {
  expect(calculator(9, 3, "/")).toBe(3);
});

// Invalid Input
test('should throw an error if first input is not a number', () => {
  expect(() => calculator("a", 5, "+")).toThrow("Please enter number");
});

test('should throw an error if second input is not a number', () => {
  expect(() => calculator(5, "b", "-")).toThrow("Please enter number");
});

test('should return error message if operator is invalid', () => {
  const result = calculator(5, 6, "%");
  expect(result.message).toBe("invalide operator");
  expect(result.success).toBe(false);
});

// Division by Zero
test('should return Infinity when dividing by zero', () => {
  expect(calculator(5, 0, "/")).toBe(Infinity);
});

// Truthiness Check
test('should return truthy value for valid operation', () => {
  expect(calculator(5, 6, "+")).toBeTruthy();
});

test('should return falsy value for invalid operator', () => {
  const result = calculator(5, 6, "%");
  expect(result.success).toBeFalsy();
});
