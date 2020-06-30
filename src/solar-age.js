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

}

}






// export function calculateEarthAge(ageObject) {
//   let earthAge = 0;
//   if (ageObject.earthAge !== 0){
//     earthAge = ageObject.earthAge;
//     return earthAge;
//   } else if (ageObject.mercuryAge !==0){
//     earthAge = (Math.round(ageObject.mercuryAge * .24));
//     return earthAge;
//   } else if (ageObject.venusAge !== 0){
//     earthAge = (Math.round(ageObject.venusAge * .62));
//     return earthAge;
//   } else if (ageObject.marsAge !== 0){
//     earthAge = (Math.round(ageObject.marsAge * 1.88));
//     return earthAge;
//   } else if (ageObject.jupiterAge !== 0){
//     earthAge = (Math.round(ageObject.jupiterAge * 11.86));
//     return earthAge;
//   }
// }





// export function calculateMars(ageObject) {
//   const marsAge = Math.floor(ageObject.earthAge * .53);
//   return marsAge;
// }

// export function calculateJupiter(ageObject) {
//   const jupiterAge = Math.floor(ageObject.earthAge * .08);
//   return jupiterAge;
// }

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
  