import SuperCalculator from '../src/supercalculator.js';

describe('SuperCalculator', () => {
  let calculate;
  beforeEach(()=> {
    calculate = new SuperCalculator(30)
  })


  test("should calculate life on earth", ()=> {
    expect(calculate.age).toBe(30);
  })

  test("should be able to return age on mercury", ()=> {
    expect(calculate.planetAge("mercury")).toBe(125);
  })

  test("should be able to return age on venus", ()=> {
    expect(calculate.planetAge("venus")).toBe(48.4);
  })
  
  test("should be able to return age on mars", ()=> {
    expect(calculate.planetAge("mars")).toBe(16);
  })

  test("should be able to return age on jupiter", ()=> {
    expect(calculate.planetAge("jupiter")).toBe(2.5);
  })

  test("if nothing shows, should return false", ()=> {
    expect(calculate.planetAge()).toBe(false);
  })

});