import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Age, checkInput, calculateMercury, calculateVenus, calculateMars, calculateJupiter } from './solar-age.js';

$(document).ready(function () {
  $("form#ageLifeExpectancy").submit(function(event) {
    event.preventDefault();
    // let earthLife = $("input#life").val();
    let earthAge = $("input#age").val();
    let age = new Age(earthAge);
    if (checkInput(earthAge) === false) {
      $("div#ageAnswer").text("Please enter your age in whole numbers!");
    } else {
      age.calculateMercury();
      calculateVenus(earthAge);
      calculateMars(earthAge);
      calculateJupiter(earthAge);
    }
      $("div#ageAnswer").append(`<li> On Earth you would be ${age.earthAge} </li>`);
      $("div#ageAnswer").append(`<li> On Mercury you would be ${age.mercuryAge} </li>`);
      $("div#ageAnswer").append(`<li> On Venus you would be ${age.venusAge} </li>`);
      $("div#ageAnswer").append(`<li> On Mars you would be ${age.marsAge} </li>`);
      $("div#ageAnswer").append(`<li> On Jupiter you would be ${age.jupiterAge} </li>`); 
  });
});