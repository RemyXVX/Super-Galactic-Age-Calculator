import SuperCalculator from '../src/supercalculator.js';

describe('SuperCalculator', () => {
  let calculate;
  beforeEach(()=> {
    calculate = new SuperCalculator(30, 78.8)
  })


  test("should calculate life on earth", ()=> {
    expect(calculate.age).toBe(30);
    expect(calculate.expYears).toBe(78.8);
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

  test("should be able to return expected life years on mercury", ()=> {
    expect(calculate.expectedLife("mercury")).toBe(328.3);
  })

  test("should be able to return expected life years on venus", ()=> {
    expect(calculate.expectedLife("venus")).toBe(127.1);
  })

  test("should be able to return expected life years on mars", ()=> {
    expect(calculate.expectedLife("mars")).toBe(41.9);
  })

  test("should be able to return expected life years on jupiter", ()=> {
    expect(calculate.expectedLife("jupiter")).toBe(6.6);
  })

  test("if nothing is inputted, should return false", ()=> {
    expect(calculate.expectedLife()).toBe(false);
  })

  test("should return the years left to live on mercury", ()=> {
    expect(calculate.tillDeath("mercury")).toBe(203.3)
  })
});