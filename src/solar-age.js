export class Age {

  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
 }

 checkInput() {
  if (this.earthAge > 0 && Number.isInteger(this.earthAge)) {
    return true;
  } else {
    return false;
  }
}

calculateMercury() {
  this.mercuryAge = Math.floor(this.earthAge * 4.17);
}

calculateVenus() {
  this.venusAge = Math.floor(this.earthAge * 1.61);
}

calculateMars() {
  this.marsAge = Math.floor(this.earthAge * .53);
}

calculateJupiter() {
  this.jupiterAge = Math.floor(this.earthAge * .08);
}

}












// // export function calculateLifeExpectancy(ageObject, life) { WORKING CODE !!!
// //   let LifeExpectancy = [0, 0];
// //   if (life - ageObject.earthAge > 0){
// //     LifeExpectancy = [1, (life - ageObject.earthAge)];
// //   } else if (life - ageObject.earthAge < 0) {
// //     LifeExpectancy = [2, (ageObject.earthAge - life)];
// //   } else if (ageObject.earthAge === life) {
// //     LifeExpectancy = [3,0];
// //   }
// //   return LifeExpectancy;
// // }

  
// export function calculateLifeExpectancy(ageObject, life) {
//   let LifeExpectancyEarth = [0, 0, 0, 0, 0, 0];
//     if (life - ageObject.earthAge > 0){
//       LifeExpectancyEarth = [1, (life - ageObject.earthAge)];
//       LifeExpectancyMercury = [1, ((life - ageObject.earthAge)* 2)]
//       LifeExpectancyVenus = [1, ((life - ageObject.earthAge)* 3)]
//       LifeExpectancyMars = [1, ((life - ageObject.earthAge)* 4)]
//       LifeExpectancyJupiter = [1, ((life - ageObject.earthAge)* 5)]
//     } else if (life - ageObject.earthAge < 0) {
//       LifeExpectancy = [2, (ageObject.earthAge - life)];
//     } else if (ageObject.earthAge === life) {
//       LifeExpectancy = [3,0];
//     }
//     return LifeExpectancy;
//   }   
  