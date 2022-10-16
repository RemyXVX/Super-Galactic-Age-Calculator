import SuperCalculator from '../src/supercalculator.js';

describe('SuperCalculator', () => {
  let calculate;
  beforeEach(()=> {
    calculate = new SuperCalculator(30)
  })


  test("should calculate life on earth", ()=> {
    expect(calculate.age).toBe(30);
  })

  test("should be able to return age in mercury", ()=> {
    expect(calculate.planetAge("mercury")).toBe(125);
  })
  
});