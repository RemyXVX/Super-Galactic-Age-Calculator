export default class SuperCalculator {
  constructor(age, expYears) {
    this.age = age
    this.expYears = expYears
    this.deathComes = expYears - age
  };

  planetAge(planet) {
    let mercury;
    let venus;
    let mars;
    let jupiter;
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
      case "jupiter":
        jupiter = parseFloat((this.age/11.86 ).toFixed(1));
        return jupiter
      default:
        return false;
    }
  };

  expectedLife(planet) {
    let mercuryYears;
    let venusYears;
    let marsYears;
    let jupiterYears;
    switch(planet) {
      case "mercury":
        mercuryYears = parseFloat((this.expYears/0.24).toFixed(1));
        return mercuryYears;
      case "venus":
        venusYears = parseFloat((this.expYears/0.62).toFixed(1));
        return venusYears;
      case "mars":
        marsYears = parseFloat((this.expYears/1.88).toFixed(1));
        return marsYears;
      case "jupiter":
        jupiterYears = parseFloat((this.expYears/11.86).toFixed(1));
        return jupiterYears;
      default:
        return false;
    }
  };

  tillDeath(planet) {
    let mercuryDeath;
    let venusDeath;
    let marsDeath;
    let jupiterDeath;
    switch(planet) {
      case "mercury":
        mercuryDeath = parseFloat((this.deathComes/0.24).toFixed(1));
        return mercuryDeath;
      case "venus":
        venusDeath = parseFloat((this.deathComes/0.62).toFixed(1));
        return venusDeath;
      case "mars":
        marsDeath = parseFloat((this.deathComes/1.88).toFixed(1));
        return marsDeath;
      case "jupiter":
        jupiterDeath = parseFloat((this.deathComes/11.86).toFixed(1));
        return jupiterDeath;
    }
  };

}