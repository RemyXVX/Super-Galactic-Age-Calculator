export default class SuperCalculator {
  constructor(age) {
    this.age = age
  }

  planetAge(planet) {
    let mercury;
    let venus;
    let mars;
    switch(planet) {
      case "mercury":
        mercury = parseFloat((this.age/0.24).toFixed(1));
        return mercury;
      case "venus":
        venus = parseFloat((this.age/0.62).toFixed(1));
        return venus;
      case "mars":
        mars = parseFloat((this.age/1.88).toFixed(1));
        return mars;
    }
  }

}