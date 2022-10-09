import SuperCalculator from '../src/supercalculator';

describe('SuperCalculator'), () => {
  test('should calculate a person age on earth', () => {
    const earthAge = new SuperCalculator(30);
    earthAge.age(30)
    expect(earthAge.age(30)).toBe(30);

  });
//how to add a button?
};