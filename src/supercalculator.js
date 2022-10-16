export default class SuperCalculator {
  constructor(age) {
    this.age = age
  }

  planetAge(planet) {
    let mercury;
    switch(planet) {
      case "mercury":
        mercury = parseFloat((this.age/0.24).toFixed(1));
        return mercury;
    }
  }

}