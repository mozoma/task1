const { validateEmail } = require('./emailValidation');
test('should return true for valid email address', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('name.surname@domain.co')).toBe(true);
});

test('should return false for email missing "@"', () => {
  expect(validateEmail('testexample.com')).toBe(false);
});

test('should return false for email missing domain', () => {
  expect(validateEmail('test@.com')).toBe(false);
});

test('should return false for non-string inputs', () => {
  expect(validateEmail(12345)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail('')).toBe(false);
});
