// shoppingCart.js

function validateCartItem(item) {
    return item && 
           typeof item.id === 'number' && 
           typeof item.productName === 'string' && 
           typeof item.quantity === 'number' && 
           typeof item.price === 'number' && 
           typeof item.addedToFavorite === 'boolean';
  }
  
  function calculateTotalPrice(cart) {
    if (!Array.isArray(cart) || cart.length === 0) {
      throw new Error('Invalid cart');
    }
    return cart.reduce((acc, item) => {
      if (!validateCartItem(item)) {
        throw new Error('Invalid item');
      }
      return acc + (item.price * item.quantity);
    }, 0);
  }
  
  module.exports = { calculateTotalPrice };
  