import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Age, checkInput, calculateMercury, calculateVenus, calculateMars, calculateJupiter } from './solar-age.js';

$(document).ready(function () {
  $("form#ageLifeExpectancy").submit(function(event) {
    event.preventDefault();
    let earthAge = $("input#age").val();
    let earthLife = $("input#life").val();
    let age = new Age(earthAge, mercuryAge, venusAge, marsAge, jupiterAge);
    if checkInput(false) {
      $("div#ageAnswer").text("Please enter your age in whole numbers!");
    } else {
      let outputMercury = calculateMercury();
      let outputVenus = calculateVenus();
      let outputMars = calculateMars();
      let outputJupiter = calculateJupiter();
      $("div#ageAnswer").append(`<li> On Mercury you would be ${outputMercury} </li>`);
      $("div#ageAnswer").text(`<li> On Venus you would be ${outputVenus}</li>`);
      $("div#ageAnswer").text(`<li>On Mars you would be ${outputMars}</li>`);
      $("div#ageAnswer").text(`<li>On Jupiter you would be ${outputJupiter}</li>`);
    }
  });
});