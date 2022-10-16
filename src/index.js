import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let ageCalculator = (event) => {
  event.preventDefault();

  let planet = document.getElementById("optionPlanet").value;
  let age = document.getElementById("age").value;

  document.getElementById("planetOpt").innerHTML = planet;
  document.getElementById("yearsOld").innerHTML = age;

};

window.addEventListener("load", ()=> {
  document.getElementById("aged").addEventListener("submit", ageCalculator);

});