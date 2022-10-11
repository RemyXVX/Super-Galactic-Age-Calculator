import SuperCalculator from '../src/supercalculator.js';

describe('SuperCalculator', () => {

  test('should calculate a person age on earth', () => {
    const earthAge = new SuperCalculator(30);
    expect(earthAge.age).toBe(30);

  });
});