// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string') return false;
    return emailRegex.test(email);
  }
  
  module.exports = { validateEmail }; // Ensure proper export
  