// shoppingCart.test.js

const { calculateTotalPrice } = require('./shoppingCart');

describe('Shopping Cart Tests', () => {
  const cart = [
    { id: 1, productName: 'Product A', quantity: 2, price: 10, addedToFavorite: true },
    { id: 2, productName: 'Product B', quantity: 1, price: 15, addedToFavorite: false },
    { id: 3, productName: 'Product C', quantity: 3, price: 20, addedToFavorite: true },
    { id: 4, productName: 'Product D', quantity: 0, price: 5, addedToFavorite: false }
  ];

  test('should verify each item in the cart has required properties', () => {
    cart.forEach(item => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('productName');
      expect(item).toHaveProperty('quantity');
      expect(item).toHaveProperty('price');
      expect(item).toHaveProperty('addedToFavorite');
    });
  });

  test('should validate the data types of each property', () => {
    cart.forEach(item => {
      expect(typeof item.id).toBe('number');
      expect(typeof item.productName).toBe('string');
      expect(typeof item.quantity).toBe('number');
      expect(typeof item.price).toBe('number');
      expect(typeof item.addedToFavorite).toBe('boolean');
    });
  });

  test('should validate the values for price and quantity', () => {
    cart.forEach(item => {
      expect(item.quantity).toBeGreaterThanOrEqual(0);
      expect(item.price).toBeGreaterThanOrEqual(0);
    });
  });

  test('should calculate the total price correctly', () => {
    const totalPrice = calculateTotalPrice(cart);
    const expectedTotalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    expect(totalPrice).toBe(expectedTotalPrice);
  });
});


