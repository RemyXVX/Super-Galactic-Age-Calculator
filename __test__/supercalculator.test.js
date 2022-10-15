import SuperCalculator from '../src/supercalculator.js';

describe('SuperCalculator', () => {
  let calulate;
  beforeEach(()=> {
    calulate = new SuperCalculator(30)
  })


  test("should calculate life on earth", ()=> {
    expect(calulate.age).toBe(30);
  })
  
});